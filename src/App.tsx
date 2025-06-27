import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import LoginPage from "./pages/LoginPage";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <LoginPage />
    <Router />
  </StrictMode>
);
