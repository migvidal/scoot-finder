import { FormEvent, useState } from "react";
import RoundedButton from "../RoundedButton";

function RangeScreen({
  onNavigate,
}: {
  onNavigate: (range: number) => any;
}) {
  const [range, setRange] = useState(0);

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
        How much range do you need?
      </h1>
      <form onSubmit={onFormSubmit}>
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
        <div className="m-8">
          <RoundedButton onClick={() => {}} type="submit">
            Next
          </RoundedButton>
        </div>
      </form>
    </div>
  );
}
export default RangeScreen;
