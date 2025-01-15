import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Page from "./Page.tsx";
import "./Styling/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
