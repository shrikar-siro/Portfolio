import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Page from "./Page.tsx";
import "./Styling/index.css";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  </StrictMode>
);
