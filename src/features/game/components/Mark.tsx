import Circle from "@mui/icons-material/PanoramaFishEye";
import Cross from "@mui/icons-material/Close";
import { createElement, memo } from "react";

import type { CellValue } from "@/shared/types/board/board.types";

const markIconMap = { Cross, Circle };

type MarkProps = {
  mark: CellValue;
};

const Mark = memo(({ mark }: MarkProps) => {
  return (
    mark &&
    createElement(markIconMap[mark], {
      fontSize: "inherit",
    })
  );
});

export default Mark;
