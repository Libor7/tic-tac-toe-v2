import Stack from "@mui/material/Stack";
import { memo } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { useGameActions } from "@/features/game/hooks/useGameActions";
import {
  selectCell,
  selectCols,
  selectRows,
} from "@/features/game/store/game.selectors";
import Mark from "../Mark";
import classes from "./Cell.module.scss";
import { Mark as MARK } from "@/shared/types/player/player.types";

type CellProps = {
  col: number;
  row: number;
};

const Cell = memo(({ col, row }: CellProps) => {
  const { playMove } = useGameActions();
  const { value, inWinningLine } = useSelector(selectCell(row, col));
  const cols = useSelector(selectCols);
  const rows = useSelector(selectRows);

  const classList = clsx(classes.cell, {
    [classes.lastColumn]: col === cols - 1,
    [classes.lastRow]: row === rows - 1,
    [classes.circleWinningLine]: inWinningLine && value === MARK.CIRCLE,
    [classes.crossWinningLine]: inWinningLine && value === MARK.CROSS,
  });

  const cellClickHandler = () => playMove(row, col);

  return (
    <Stack className={classList} onClick={cellClickHandler}>
      <Mark mark={value} />
    </Stack>
  );
});

export default Cell;
