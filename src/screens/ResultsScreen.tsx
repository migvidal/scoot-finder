import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { currentAnswers } from "../AnswersState";
import RoundedButton from "../components/RoundedButton";
import { Scooter, calculateResult } from "../Scooters";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useAutocompleteT } from "../i18n/translate";

function getPropertyList(scooter: Scooter): JSX.Element {
  const { T } = useAutocompleteT();
  const propertiesAsStrings = [
    scooter.performantUphill ? T("can-climb-hills") : null,
    scooter.portable ? T("portable") : null,
    T("max-supported-weight") + scooter.maxSupportedWeight + "kg",
    T("max-speed") + scooter.maxSpeed + "km/h",
  ].filter((property) => property !== null);
  return (
    <ul>
      {propertiesAsStrings.map((property) => (
        <li>
          <FontAwesomeIcon className="pr-2" icon={faCheck} />
          <span>{property}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ResultsScreen({ onNavigate }: { onNavigate: () => any }) {
  const { T } = useAutocompleteT();

  const bestScooter = calculateResult(currentAnswers)[0];
  const otherScooters = calculateResult(currentAnswers);
  otherScooters.shift();

  return (
    <div className="flex flex-col items-center">
      {/* Best scooter */}
      <h1 className="text-3xl font-bold text-center px-4">
        {T("this-is-your-perfect-scooter")}
      </h1>
      <div className="flex flex-col items-center bg-yellow-300 dark:bg-yellow-400 p-8 rounded-2xl text-black m-4">
        <img
          className="rounded-xl mb-4"
          src={bestScooter.getImgPath()}
          alt={bestScooter.getFullName()}
        />
        <h3 className="text-xl font-bold">{bestScooter.getFullName()}</h3>
        {getPropertyList(bestScooter)}
      </div>
      <RoundedButton type="button" onClick={onNavigate}>{T("try-again")}</RoundedButton>
      <div className="h-8"></div>
      <h2 className="text-xl font-bold">{T("other-options")}</h2>
      <div className="flex flex-row flex-wrap justify-evenly">
        {/* Other scooters */}
        {otherScooters.map((scooter) => {
          return (
            <div key={scooter.id.toString()} className="sm:max-w-xs max-w-full">
              <div className="flex flex-col p-8 rounded-2xl border border-gray-200 dark:border-gray-800 m-4">
                <img
                  className="rounded-xl mb-4"
                  src={scooter.getImgPath()}
                  alt={scooter.getFullName()}
                />
                <h3 className="text-xl font-bold">{scooter.getFullName()}</h3>
                {getPropertyList(scooter)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
