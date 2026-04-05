import type { Board } from "@/shared/types/board/board.types";

export const createBoard = (rows: number, cols: number): Board =>
  Array.from({ length: rows }, () => Array.from({ length: cols }, () => null));
