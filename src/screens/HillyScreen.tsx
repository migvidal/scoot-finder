import { FormEvent, useState } from "react";
import { NavigateFunction } from "react-router-dom";

function HillyScreen({
  onNavigate,
}: {
  onNavigate: (isHilly: Boolean) => any;
}) {
  const [isHilly, setIsHilly] = useState(false);
  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    onNavigate(isHilly);
  }
  function onHillyChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.currentTarget.value;
    console.log(currentValue);
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        Do you live in a hilly area?
      </h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="radio"
          name="radio-hilly"
          id="radio-hilly-yes"
          checked={isHilly}
          onChange={onHillyChange}
        />
        <label htmlFor="radio-hilly-yes">Yes</label>
        <input
          type="radio"
          name="radio-hilly"
          id="radio-hilly-no"
          checked={!isHilly}
          onChange={onHillyChange}
        />
        <label htmlFor="radio-hilly-no">No</label>
      </form>
    </div>
  );
}
export default HillyScreen;
