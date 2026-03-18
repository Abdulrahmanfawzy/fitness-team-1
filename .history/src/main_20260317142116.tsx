import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
console.log("REACT MAIN.TSX STARTING");
// Ensure the fixed token is always set for the application

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
