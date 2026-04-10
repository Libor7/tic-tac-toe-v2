import type { Board, ICell } from "@/shared/types/board/board.types";
import type { MarkType } from "@/shared/types/player/player.types";

type Direction = [number, number];

export const createBoard = (rows: number, cols: number): Board =>
  Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => ({
      row,
      col,
      inWinningLine: false,
      value: null,
    })),
  );

const isInBounds = (
  row: number,
  col: number,
  totalRows: number,
  totalCols: number,
) => row >= 0 && row < totalRows && col >= 0 && col < totalCols;

const directions: Direction[] = [
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
];

// export function collectLineInDirection(
//   board: Board,
//   startRow: number,
//   startCol: number,
//   rowDelta: number,
//   colDelta: number,
//   mark: MarkType,
//   maxWinLength: number,
// ): ICell[] {
//   const totalRows = board.length;
//   const totalCols = board[0].length;
//   const lineCells: ICell[] = [board[startRow][startCol]];

//   let nextRow = startRow + rowDelta;
//   let nextCol = startCol + colDelta;

//   while (lineCells.length < maxWinLength) {
//     if (!isInBounds(nextRow, nextCol, totalRows, totalCols)) break;

//     const cell = board[nextRow][nextCol];
//     if (!cell.value || cell.value !== mark) break;

//     const winningCellsInLine = lineCells.filter(c => c.inWinningLine).length;
//     if (winningCellsInLine < maxWinLength) {
//       lineCells.push(cell);
//     } else {
//       break;
//     }

//     nextRow += rowDelta;
//     nextCol += colDelta;
//   }

//   nextRow = startRow - rowDelta;
//   nextCol = startCol - colDelta;

//   while (lineCells.length < maxWinLength) {
//     if (!isInBounds(nextRow, nextCol, totalRows, totalCols)) break;

//     const cell = board[nextRow][nextCol];
//     if (!cell.value || cell.value !== mark) break;

//     const winningCellsInLine = lineCells.filter(c => c.inWinningLine).length;

//     if (winningCellsInLine < maxWinLength) {
//       if (!lineCells.some((c) => c.row === cell.row && c.col === cell.col)) {
//         lineCells.unshift(cell);
//       }
//     } else {
//       break;
//     }

//     nextRow -= rowDelta;
//     nextCol -= colDelta;
//   }

//   if (lineCells.length >= maxWinLength) {
//     markAsWinning(lineCells);
//   }

//   return lineCells;
// }

export function collectLineInDirection(
  board: Board,
  startRow: number,
  startCol: number,
  rowDelta: number,
  colDelta: number,
  mark: MarkType,
  maxWinLength: number,
): ICell[] {
  const totalRows = board.length;
  const totalCols = board[0].length;
  const lineCells: ICell[] = [board[startRow][startCol]];

  let nextRow = startRow + rowDelta;
  let nextCol = startCol + colDelta;

  while (lineCells.length < maxWinLength) {
    if (!isInBounds(nextRow, nextCol, totalRows, totalCols)) break;

    const cell = board[nextRow][nextCol];
    console.log("cell value vs mark:", cell.value, mark);
    if (!cell.value || cell.value !== mark) break;

    const alreadyWinning = cell.inWinningLine;
    const countWinningCells = lineCells.filter((c) => c.inWinningLine).length;
    if (alreadyWinning && countWinningCells >= 1) break;

    lineCells.push(cell);

    nextRow += rowDelta;
    nextCol += colDelta;
  }

  nextRow = startRow - rowDelta;
  nextCol = startCol - colDelta;

  while (lineCells.length < maxWinLength) {
    if (!isInBounds(nextRow, nextCol, totalRows, totalCols)) break;

    const cell = board[nextRow][nextCol];

    if (!cell.value || cell.value !== mark) break;

    // const alreadyWinning = cell.inWinningLine;
    // const countWinningCells = lineCells.filter((c) => c.inWinningLine).length;
    // Ak už máme v linii nájdenú výhernú bunku, neumožniť zahrnúť ďalšiu výhernú bunku z opačného smeru
    // if (alreadyWinning && countWinningCells >= 1) break;
    // if (lineCells.filter(c => c.inWinningLine).length >= winningLineLength - 1) break;
    // if (lineCells.filter(c => c.inWinningLine).length >= 3 - 1) break;
    const winningCellsInLine = lineCells.filter((c) => c.inWinningLine);
    if (winningCellsInLine.length >= maxWinLength - 1) break;

    // lineCells.unshift(cell);
    // if (!lineCells.some((c) => c.row === cell.row && c.col === cell.col)) {
    //   lineCells.unshift(cell);
    // }
    const alreadyWinningInThisDirection = lineCells
      .filter((c) => c.inWinningLine)
      .some(
        (c) => (c.row - startRow) * colDelta === (c.col - startCol) * rowDelta,
      );
    if (alreadyWinningInThisDirection) break;

    lineCells.unshift(cell);

    nextRow -= rowDelta;
    nextCol -= colDelta;
  }

  if (lineCells.length >= maxWinLength) {
    markAsWinning(lineCells);
  }

  return lineCells;
}

export const checkWinningLines = (
  board: Board,
  row: number,
  col: number,
  mark: MarkType,
  maxWinLength: number,
): ICell[][] => {
  return directions
    .map(([rowDelta, colDelta]) =>
      collectLineInDirection(
        board,
        row,
        col,
        rowDelta,
        colDelta,
        mark,
        maxWinLength,
      ),
    )
    .filter((line) => line.length >= maxWinLength);
};

const markAsWinning = (cells: ICell[]) => {
  cells.forEach((cell) => (cell.inWinningLine = true));
};
