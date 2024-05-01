import { FormEvent, useState } from "react";

function SizeScreen({ onNavigate }: { onNavigate: (small: Boolean) => any }) {
  const [small, setSmall] = useState(false);
  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    onNavigate(small);
  }
  function onSmallChange(small: boolean) {
    setSmall(small);
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        Do you plan on bringing the scooter on public transport / your car?
      </h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="radio"
          name="radio-small"
          id="radio-small-yes"
          checked={small}
          onChange={() => onSmallChange(true)}
        />
        <label htmlFor="radio-small-yes">
          Yes, I'll bring it on public transport / in the trunk of my car often.
        </label>
        <input
          type="radio"
          name="radio-small"
          id="radio-small-no"
          checked={!small}
          onChange={() => onSmallChange(false)}
        />
        <label htmlFor="radio-small-no">No, I don't plan to</label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
export default SizeScreen;