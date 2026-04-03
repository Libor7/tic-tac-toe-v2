export const Mark = {
  X: 0,
  O: 1,
} as const;

export type MarkType = (typeof Mark)[keyof typeof Mark];

export const Player = {
  HUMAN: "human",
  COMPUTER: "computer",
} as const;

export type PlayerType = (typeof Player)[keyof typeof Player];

export interface IPlayer {
  mark: MarkType;
  score: number;
  type: PlayerType;
};
