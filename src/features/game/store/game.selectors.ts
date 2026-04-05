import type { RootState } from "@/store/store";

export const selectCellValue =
  (row: number, col: number) =>
  ({ game }: RootState) =>
    game.board[row][col];

export const selectCols = ({ game }: RootState) => game.settings.cols;

export const selectRows = ({ game }: RootState) => game.settings.rows;
