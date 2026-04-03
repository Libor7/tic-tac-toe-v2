import type { Board, CellValue } from "@/shared/types/board/board.types";

export const createBoard = (rows: number, cols: number): Board =>
  Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: cols }, (_, colIndex) => ({
      row: rowIndex,
      col: colIndex,
      value: null as CellValue,
    })),
  );
