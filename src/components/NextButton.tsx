import { useAutocompleteT } from "../i18n/translate";
import RoundedButton from "./RoundedButton";

export default function NextButton() {
  const { T } = useAutocompleteT();
  return (
    <div className="m-8">
      <RoundedButton onClick={() => {}} type="submit">
        {T("next")}
      </RoundedButton>
    </div>
  );
}
