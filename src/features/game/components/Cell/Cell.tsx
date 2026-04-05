import Stack from "@mui/material/Stack";
import { memo } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { useGameActions } from "@/features/game/hooks/useGameActions";
import {
  selectCellValue,
  selectCols,
  selectRows,
} from "@/features/game/store/game.selectors";
import Mark from "../Mark";
import classes from "./Cell.module.scss";

type CellProps = {
  col: number;
  row: number;
};

const Cell = memo(({ col, row }: CellProps) => {
  const { playMove } = useGameActions();
  const value = useSelector(selectCellValue(row, col));
  const cols = useSelector(selectCols);
  const rows = useSelector(selectRows);

  const classList = clsx(classes.cell, {
    [classes.lastColumn]: col === cols - 1,
    [classes.lastRow]: row === rows - 1,
  });

  const cellClickHandler = () => playMove(row, col);

  return (
    <Stack className={classList} onClick={cellClickHandler}>
      <Mark mark={value} />
    </Stack>
  );
});

export default Cell;
