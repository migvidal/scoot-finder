import { FormEvent, useState } from "react";
import { Extra } from "../AnswersState";

class ExtrasForm {
  extra: Extra;
  label: string;
  nameAndId: string;
  constructor(extra: Extra, label: string, nameAndId: string) {
    this.extra = extra;
    this.label = label;
    this.nameAndId = nameAndId;
  }
}

const extrasFormElements = [
  new ExtrasForm(Extra.Blinkers, "Blinkers", "checkbox-blinkers"),
  new ExtrasForm(
    Extra.CruiseControl,
    "Cruise control",
    "checkbox-cruise-control"
  ),
  new ExtrasForm(Extra.Horn, "Horn", "checkbox-horn"),
];

function ExtrasScreen({
  onNavigate,
}: {
  onNavigate: (extras: Set<Extra>) => any;
}) {
  const [extras, setExtras] = useState<Set<Extra>>(new Set());
  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    onNavigate(extras);
  }
  function onExtrasChange(newExtra: Extra) {
    const newSet = new Set(extras);
    const alreadyExists = Array.from(newSet).some((extra) => extra == newExtra);
    if (alreadyExists) {
      newSet.delete(newExtra);
    } else {
      newSet.add(newExtra);
    }
    setExtras(newSet);
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        What extra features do you want on your scooter?
      </h1>
      <form onSubmit={onFormSubmit}>
        {extrasFormElements.map((e) => (
          <div key={e.extra}>
            <input
              type="checkbox"
              name={e.nameAndId}
              id={e.nameAndId}
              checked={extras.has(e.extra)}
              onChange={() => onExtrasChange(e.extra)}
            />
            <label htmlFor={e.nameAndId}>{e.label}</label>
          </div>
        ))}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
export default ExtrasScreen;
