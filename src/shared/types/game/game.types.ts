import type { Board } from "@/shared/types/board/board.types";
import type { IPlayer, MarkType } from "../player/player.types";

export interface IGameSettings {
  cols: number;
  rows: number;
  winningLineLength: number;
}

export interface IGameState {
  activeMark: MarkType;
  board: Board;
  playersByMark: Record<MarkType, IPlayer>;
  settings: IGameSettings;
}
