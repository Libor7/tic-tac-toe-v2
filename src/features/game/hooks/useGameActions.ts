import { useCallback } from "react";
import { useAppDispatch } from "@/store/store";

import { gameActions } from "../store/game.slice";

export const useGameActions = () => {
  const dispatch = useAppDispatch();

  const playMove = useCallback(
    (row: number, col: number) => {
      dispatch(gameActions.placeMark({ col, row }));
    },
    [dispatch],
  );

  return {
    playMove,
  };
};
