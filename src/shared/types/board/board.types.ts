import type { MarkType } from "@/shared/types/player/player.types";

export type Board = CellValue[][];

export type CellValue = MarkType | null;
