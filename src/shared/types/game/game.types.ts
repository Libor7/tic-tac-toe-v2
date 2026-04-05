import type { Board } from "@/shared/types/board/board.types";
import type { MarkType } from "../player/player.types";

export interface IGameSettings {
  cols: number;
  rows: number;
  lineLengthToWin: number;
};

export interface IGameState {
  activeMark: MarkType;
  board: Board;
  // TODO players: [IPlayer, IPlayer];
  settings: IGameSettings;
};
