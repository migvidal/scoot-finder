import { BrowserRouter } from "react-router-dom";
import RouterWrapper from "./RouterWrapper";
import { Talkr } from "talkr";
import en from "./i18n/en.json";
import es from "./i18n/es.json";

export default function App() {
  return (
    <Talkr languages={{ en, es }} defaultLanguage={"en"}>
      <BrowserRouter>
        <RouterWrapper/>
      </BrowserRouter>
    </Talkr>
  );
}
