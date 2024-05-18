import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import en from "./i18n/en.json";
import es from "./i18n/es.json";
import { Talkr } from "talkr";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Talkr languages={{en, es}} defaultLanguage={"en"}>
      <App />
    </Talkr>
  </React.StrictMode>
);
