import { FormEvent, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import NextButton from "../components/NextButton";

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
  function onHillyChange(newIsHilly: boolean) {
    setIsHilly(newIsHilly);
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        Do you live in a hilly area?
      </h1>
      <FontAwesomeIcon className="size-20" icon={faMountain} />
      <form onSubmit={onFormSubmit}>
        <span className="m-4">
          <input
            type="radio"
            name="radio-hilly"
            id="radio-hilly-yes"
            checked={isHilly}
            onChange={() => onHillyChange(true)}
          />
          <label htmlFor="radio-hilly-yes">Yes</label>
        </span>
        <span className="m-4">
          <input
            type="radio"
            name="radio-hilly"
            id="radio-hilly-no"
            checked={!isHilly}
            onChange={() => onHillyChange(false)}
          />
          <label htmlFor="radio-hilly-no">No</label>
        </span>
        <NextButton/>
      </form>
    </div>
  );
}
export default HillyScreen;
