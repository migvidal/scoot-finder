import { FormEvent, useEffect, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAutocompleteT } from "../i18n/translate";

function WeightScreen({ onNavigate }: { onNavigate: (weight: number) => any }) {
  const { T } = useAutocompleteT();
  const [weight, setWeight] = useState(60);
  const personIconStyle = {
    height: (1.5 * weight).toFixed(0) + "px",
    width: (1.5 * weight).toFixed(0) + "px",
  };

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    onNavigate(weight);
  }
  function onWeightChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.currentTarget.value;
    setWeight(Number(currentValue));
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        {T("questions.how-much-do-you-weigh")}
      </h1>
      <form className="flex flex-col items-center m-10" onSubmit={onFormSubmit}>
        <div>
          <input
            className="border rounded-lg p-2 dark:text-black"
            type="number"
            name="weight-input"
            id="weight-input"
            value={weight}
            onChange={onWeightChange}
            min="20"
            max="200"
          />
          <span className="p-4">kg</span>
        </div>

        <div className="relative size-40 flex items-center justify-center m-4">
          <img
            src="/src/assets/icons/scooter.svg"
            className="absolute bottom-0 size-28 opacity-50"
          />
          <div className="absolute bottom-6" style={personIconStyle}>
            <FontAwesomeIcon
              className="size-full"
              icon={faPerson}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="m-8">
          <RoundedButton onClick={() => {}} type="submit">
            {T("next")}
          </RoundedButton>
        </div>
      </form>
    </div>
  );
}
export default WeightScreen;
