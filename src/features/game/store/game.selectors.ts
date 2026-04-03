import type { RootState } from "@/store/store";

export const selectBoard = ({ game }: RootState) => game.board;
