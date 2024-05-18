import { useT, Autocomplete, TParams, tr } from "talkr";
import en from "./en.json";

type Key = Autocomplete<typeof en>;

export const useAutocompleteT = () => {
  const { locale, setLocale, languages, defaultLanguage } = useT();
  return {
    setLocale,
    locale,
    T: (key: Key, params?: TParams) =>
      tr({ locale, languages, defaultLanguage }, key, params),
  };
};