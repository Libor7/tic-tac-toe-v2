import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import "@/index.scss";
import App from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>,
);
