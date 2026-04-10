import type { MarkType } from "@/shared/types/player/player.types";

export interface ICell {
  row: number;
  col: number;
  inWinningLine: boolean;
  value: CellValue;
};

export type Board = ICell[][];

export type CellValue = MarkType | null;
