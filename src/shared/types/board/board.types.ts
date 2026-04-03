import type { MarkType } from "@/shared/types/player/player.types";

export type Board = ICell[][];

export interface ICell {
  col: number;
  row: number;
  value: CellValue;
}

export type CellValue = MarkType | null;
