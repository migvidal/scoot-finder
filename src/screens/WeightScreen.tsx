import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";

function WeightScreen() {
  const [weight, setWeight] = useState(0);
  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
  }
  function onWeightRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.currentTarget.value;
    setWeight(Number(currentValue));
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-bold text-center px-4">
        How much do you weigh?
      </h1>
      <p>{weight}</p>
      <form onSubmit={onFormSubmit}>
        <input
          type="range"
          name="weight-range"
          id="weight-range"
          value={weight + "kg"}
          onChange={onWeightRangeChange}
          min="20"
          max="200"
        />
      </form>
    </div>
  );
}
export default WeightScreen;
