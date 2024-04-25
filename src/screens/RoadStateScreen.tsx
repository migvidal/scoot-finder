import { FormEvent, useState } from "react";

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
      <form onSubmit={onFormSubmit}>
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
        <input
          type="radio"
          name="radio-bumpy"
          id="radio-bumpy-no"
          checked={!bumpyRoads}
          onChange={() => onBumpyRoadsChange(false)}
        />
        <label htmlFor="radio-bumpy-no">Good: smooth, even surface.</label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
export default RoadStateScreen;
