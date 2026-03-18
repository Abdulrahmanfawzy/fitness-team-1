import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
import "./index.css";
import App from "./App.tsx";
=======
>>>>>>> 07aaa3fe34c2601a852824cdfb4efb77dedd73bc

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
