import { FormEvent, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import { faGauge, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextButton from "../components/NextButton";
import { useAutocompleteT } from "../i18n/translate";

function SpeedLimitScreen({
  onNavigate,
}: {
  onNavigate: (wantedSpeedLimit: number) => any;
}) {
  const { T } = useAutocompleteT();

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
        {T("questions.max-speed-question")}
      </h1>
      <p className="text-gray-500 py-4">{T("remember-to-follow-laws")}</p>
      <FontAwesomeIcon
        className="size-20"
        icon={wantedSpeedLimit > 25 ? faGaugeHigh : faGauge}
      />
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
        <NextButton />
      </form>
    </div>
  );
}
export default SpeedLimitScreen;
