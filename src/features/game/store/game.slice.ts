import { createSlice } from "@reduxjs/toolkit";

import type { IGameState } from "@/shared/types/game/game.types";
import { Mark } from "@/shared/types/player/player.types";
import { createBoard } from "../utils/game.utils";
import {
  DEFAULT_COLS,
  DEFAULT_ROWS,
  DEFAULT_WIN_LENGTH,
} from "../game.constants";
import { placeMark } from "./game.reducers";

const initialGameState: IGameState = {
  activeMark: Mark.CROSS,
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
  reducers: {
    placeMark,
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
