import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./stylesheets/index.module.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./utils/Context.jsx";

createRoot(document.getElementById("root")).render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);
