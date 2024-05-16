import { FormEvent, useEffect, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WeightScreen({ onNavigate }: { onNavigate: (weight: number) => any }) {
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
        How much do you weigh?
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

        <div className="size-40 flex items-center justify-center m-4">
          <div style={personIconStyle}>
            <FontAwesomeIcon
              className="size-full"
              icon={faPerson}
            ></FontAwesomeIcon>
          </div>
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
export default WeightScreen;
