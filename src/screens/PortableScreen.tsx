import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import NextButton from "../components/NextButton";
import { useAutocompleteT } from "../i18n/translate";

export default function SizeScreen({ onNavigate }: { onNavigate: (small: Boolean) => any }) {
  const { T } = useAutocompleteT();

  const [small, setSmall] = useState(false);
  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    onNavigate(small);
  }
  function onSmallChange(small: boolean) {
    setSmall(small);
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        {T("questions.public-transport-question")}
      </h1>
      <FontAwesomeIcon className="size-20" icon={faBus} />
      <form onSubmit={onFormSubmit} className="m-4">
        <div>
          <input
            type="radio"
            name="radio-small"
            id="radio-small-yes"
            checked={small}
            onChange={() => onSmallChange(true)}
          />
          <label htmlFor="radio-small-yes">
            {T("answers.yes-public-transport")}
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="radio-small"
            id="radio-small-no"
            checked={!small}
            onChange={() => onSmallChange(false)}
          />
          <label htmlFor="radio-small-no">{T("answers.no-i-dont-plan-to")}</label>
        </div>
        <NextButton />
      </form>
    </div>
  );
}
