import { FormEvent, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextButton from "../components/NextButton";
import { useAutocompleteT } from "../i18n/translate";

export default function RangeScreen({
  onNavigate,
}: {
  onNavigate: (range: number) => any;
}) {
  const { T } = useAutocompleteT();

  const [range, setRange] = useState(30);

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    onNavigate(range);
  }
  function onRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number.parseInt(e.target.value);
    setRange(value);
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        {T("questions.range-question")}
      </h1>
      <FontAwesomeIcon className="size-20" icon={faRoute} />
      <form className="flex flex-col items-center m-8" onSubmit={onFormSubmit}>
        <p>{range + "km"}</p>
        <input
          type="range"
          name="range"
          id="range"
          min="30"
          max="180"
          step="30"
          value={range}
          onChange={onRangeChange}
        />
        <NextButton/>
      </form>
    </div>
  );
}
