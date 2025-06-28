import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";
import { GlobalStyles } from "./styles/GlobalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Router />
  </StrictMode>
);
