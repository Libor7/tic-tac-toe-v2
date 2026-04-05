import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

import { selectCols, selectRows } from "../store/game.selectors";
import BoardRow from "./BoardRow";

const GameBoard = () => {
  const cols = useSelector(selectCols);
  const rows = useSelector(selectRows);

  return (
    <Stack direction="column">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <BoardRow key={rowIndex} cols={cols} rowIndex={rowIndex} />
      ))}
    </Stack>
  );
};

export default GameBoard;
