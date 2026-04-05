import { type PayloadAction } from "@reduxjs/toolkit";

import type { IGameState } from "@/shared/types/game/game.types";
import { Mark, type MarkType } from "@/shared/types/player/player.types";

const toggleActiveMark = (activeMark: MarkType): MarkType =>
  activeMark === Mark.CROSS ? Mark.CIRCLE : Mark.CROSS;

interface Position {
  col: number;
  row: number;
}

export const placeMark = (
  state: IGameState,
  { payload: { col, row } }: PayloadAction<Position>,
) => {
  if (state.board[row][col] === null) {
    state.board[row][col] = state.activeMark;
    state.activeMark = toggleActiveMark(state.activeMark);
  }
};
