import { FormEvent, useState } from "react";
import RoundedButton from "../RoundedButton";

function SpeedLimitScreen({
  onNavigate,
}: {
  onNavigate: (wantedSpeedLimit: number) => any;
}) {
  const [wantedSpeedLimit, setWantedSpeedLimit] = useState(0);

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
        At what speed do you want to go?
      </h1>
      <form onSubmit={onFormSubmit}>
        <p>{wantedSpeedLimit + "km/h"}</p>
        <input
          type="range"
          name="speed-limit"
          id="speed-limit"
          min="10"
          max="50"
          step="10"
          value={wantedSpeedLimit}
          onChange={onSpeedLimitChange}
        />
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
