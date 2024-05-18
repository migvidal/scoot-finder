import { FormEvent, useState } from "react";
import { Extra } from "../AnswersState";
import RoundedButton from "../components/RoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBullhorn,
  faGaugeHigh,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import NextButton from "../components/NextButton";
import { useAutocompleteT } from "../i18n/translate";

class ExtrasForm {
  constructor(
    public extra: Extra,
    public label: string,
    public nameAndId: string,
    public icon: IconProp
  ) {}
}

function ExtrasScreen({
  onNavigate,
}: {
  onNavigate: (extras: Set<Extra>) => any;
}) {
  const { T } = useAutocompleteT();
  const [extras, setExtras] = useState<Set<Extra>>(new Set());
  
  const extrasFormElements = [
    new ExtrasForm(Extra.Blinkers, T("answers.blinkers"), "checkbox-blinkers", faLightbulb),
    new ExtrasForm(
      Extra.CruiseControl,
      T("answers.cruise-control"),
      "checkbox-cruise-control",
      faGaugeHigh
    ),
    new ExtrasForm(Extra.Horn, T("answers.horn"), "checkbox-horn", faBullhorn),
  ];

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
        {T("questions.extra-features-question")}
      </h1>
      <div className="flex flex-row">
        {extrasFormElements.map((e) => (
          <div className={extras.has(e.extra) ? "opacity-100" : "opacity-30"}>
            <FontAwesomeIcon icon={e.icon} className="size-20 m-4" />
          </div>
        ))}
      </div>
      <form onSubmit={onFormSubmit} className="m-4">
        {extrasFormElements.map((e) => (
          <div key={e.extra}>
            <input
              type="checkbox"
              name={e.nameAndId}
              id={e.nameAndId}
              checked={extras.has(e.extra)}
              onChange={() => onExtrasChange(e.extra)}
            />
            <span className="mx-1"></span>
            <label htmlFor={e.nameAndId}>{e.label}</label>
          </div>
        ))}
        <NextButton/>
      </form>
    </div>
  );
}
export default ExtrasScreen;
