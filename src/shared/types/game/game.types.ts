import type { Board } from "@/shared/types/board/board.types";

export interface IGameSettings {
  cols: number;
  rows: number;
  lineLengthToWin: number;
};

export interface IGameState {
  board: Board;
  // TODO activeMark: Mark;
  // TODO players: [IPlayer, IPlayer];
  settings: IGameSettings;
};
