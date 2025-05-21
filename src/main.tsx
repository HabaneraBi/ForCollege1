import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App/App";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
