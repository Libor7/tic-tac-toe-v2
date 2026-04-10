import { type PayloadAction } from "@reduxjs/toolkit";

import type { IGameState } from "@/shared/types/game/game.types";
import { Mark, type MarkType } from "@/shared/types/player/player.types";
import { checkWinningLines } from "../utils/game.utils";

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
  if (state.board[row][col].value === null) {
    checkWinningLines(
      state.board,
      row,
      col,
      state.activeMark,
      state.settings.winningLineLength,
    );
    state.board[row][col].value = state.activeMark;
    state.activeMark = toggleActiveMark(state.activeMark);
  }
};
