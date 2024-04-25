import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";

function WeightScreen({
  onNavigate,
}: {
  onNavigate: (weight: number) => any;
}) {
  const location = useLocation();
  const [weight, setWeight] = useState(0);
  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Location");
    console.log(location);
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
      <form className="m-10" onSubmit={onFormSubmit}>
        <input
          className="border rounded-lg p-2"
          type="number"
          name="weight-input"
          id="weight-input"
          value={weight}
          onChange={onWeightChange}
          min="20"
          max="200"
        />
        kg
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
export default WeightScreen;
