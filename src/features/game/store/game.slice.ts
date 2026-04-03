import { createSlice } from "@reduxjs/toolkit";

import type { IGameState } from "@/shared/types/game/game.types";
import { createBoard } from "../utils/game.utils";
import {
  DEFAULT_COLS,
  DEFAULT_ROWS,
  DEFAULT_WIN_LENGTH,
} from "../game.constants";

const initialGameState: IGameState = {
  board: createBoard(DEFAULT_ROWS, DEFAULT_COLS),
  settings: {
    rows: DEFAULT_ROWS,
    cols: DEFAULT_COLS,
    lineLengthToWin: DEFAULT_WIN_LENGTH,
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {},
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
