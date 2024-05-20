import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import NextButton from "../components/NextButton";
import { useAutocompleteT } from "../i18n/translate";

export default function RoadStateScreen({
  onNavigate,
}: {
  onNavigate: (bumpyRoads: Boolean) => any;
}) {
  const { T } = useAutocompleteT();

  const [bumpyRoads, setBumpyRoads] = useState(false);

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    onNavigate(bumpyRoads);
  }
  function onBumpyRoadsChange(newBumpyRoads: boolean) {
    setBumpyRoads(newBumpyRoads);
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        {T("questions.road-condition")}
      </h1>
      <FontAwesomeIcon className="size-20" icon={faRoad} />
      <form onSubmit={onFormSubmit}>
        <div className="m-2">
          <input
            type="radio"
            name="radio-bumpy"
            id="radio-bumpy-yes"
            checked={bumpyRoads}
            onChange={() => onBumpyRoadsChange(true)}
          />
          <label htmlFor="radio-bumpy-yes">
            {T("answers.poor-uneven-bumpy")}
          </label>
        </div>
        <div className="m-2">
          <input
            type="radio"
            name="radio-bumpy"
            id="radio-bumpy-no"
            checked={!bumpyRoads}
            onChange={() => onBumpyRoadsChange(false)}
          />
          <label htmlFor="radio-bumpy-no">
            {T("answers.good-smooth-even")}
          </label>
        </div>
        <NextButton />
      </form>
    </div>
  );
}
