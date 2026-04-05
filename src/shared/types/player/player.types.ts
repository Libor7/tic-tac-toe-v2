export const Mark = {
  CROSS: "Cross",
  CIRCLE: "Circle",
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
}
