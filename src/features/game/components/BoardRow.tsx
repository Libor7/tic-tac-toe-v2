import Stack from "@mui/material/Stack";
import { memo } from "react";

import Cell from "./Cell/Cell";

type BoardRowProps = {
  cols: number;
  rowIndex: number;
};

const BoardRow = memo(({ cols, rowIndex }: BoardRowProps) => {
  return (
    <Stack direction="row">
      {Array.from({ length: cols }).map((_, colIndex) => (
        <Cell key={colIndex} col={colIndex} row={rowIndex} />
      ))}
    </Stack>
  );
});

export default BoardRow;
