import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import BottomBar from "./components/BottomBar";
import SignPage from "./pages/login/SignPage";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Router />
  </StrictMode>
);
