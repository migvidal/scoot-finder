import { FormEvent, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad } from "@fortawesome/free-solid-svg-icons";

function RoadStateScreen({
  onNavigate,
}: {
  onNavigate: (bumpyRoads: Boolean) => any;
}) {
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
        What's the condition of the roads in your location?
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
            Poor: uneven, bumpy surface; potholes...
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
          <label htmlFor="radio-bumpy-no">Good: smooth, even surface.</label>
        </div>
        <div className="m-8">
          <RoundedButton onClick={() => {}} type="submit">
            Next
          </RoundedButton>
        </div>
      </form>
    </div>
  );
}
export default RoadStateScreen;
