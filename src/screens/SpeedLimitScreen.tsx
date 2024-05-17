import { FormEvent, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SpeedLimitScreen({
  onNavigate,
}: {
  onNavigate: (wantedSpeedLimit: number) => any;
}) {
  const [wantedSpeedLimit, setWantedSpeedLimit] = useState(25);

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    onNavigate(wantedSpeedLimit);
  }
  function onSpeedLimitChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number.parseInt(e.target.value);
    setWantedSpeedLimit(value);
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        At what maximum speed do you want to go?
      </h1>
      <p className="text-gray-500 py-4">
        Remember to follow national and local laws for the speed limit of PEVs
      </p>
      <FontAwesomeIcon className="size-20" icon={faGauge} />
      <form className="flex flex-col items-center m-8" onSubmit={onFormSubmit}>
        <p>{wantedSpeedLimit + "km/h"}</p>
        <input
          type="range"
          name="speed-limit"
          id="speed-limit"
          min="10"
          max="80"
          step="5"
          list="speed-markers"
          value={wantedSpeedLimit}
          onChange={onSpeedLimitChange}
        />
        <datalist id="speed-markers" className="flex w-full">
          <option className="mx-4" value="25" label="EU"></option>
          <option className="mx-2" value="50" label="USA"></option>
        </datalist>
        <div className="m-8">
          <RoundedButton onClick={() => {}} type="submit">
            Next
          </RoundedButton>
        </div>
      </form>
    </div>
  );
}
export default SpeedLimitScreen;
