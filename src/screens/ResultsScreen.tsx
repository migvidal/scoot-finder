import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { currentAnswers } from "../AnswersState";
import RoundedButton from "../components/RoundedButton";
import { calculateResult } from "../Scooters";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function ResultsScreen({ onNavigate }: { onNavigate: () => any }) {
  const bestScooter = calculateResult(currentAnswers)[0];
  const otherScooters = calculateResult(currentAnswers);
  otherScooters.shift();

  return (
    <div className="flex flex-col items-center">
      {/* Best scooter */}
      <h1 className="text-3xl font-bold text-center px-4">
        This is your perfect scooter:
      </h1>
      <div className="flex flex-col items-center bg-yellow-300 dark:bg-yellow-400 p-8 rounded-2xl text-black m-4">
        <img
          className="rounded-xl mb-4"
          src={bestScooter.getImgPath()}
          alt={bestScooter.getFullName()}
        />
        <h3 className="text-xl font-bold">{bestScooter.getFullName()}</h3>
        <ul>
          {bestScooter.canGoUphill ? (
            <li>
              <FontAwesomeIcon className="pr-2" icon={faCheck} />
              Can climb steep hills
            </li>
          ) : (
            ""
          )}

          {"Max supported weight: " + bestScooter.maxSupportedWeight + "kg"}
          <p>{bestScooter.portable ? "Portable" : ""}</p>
        </ul>
      </div>
      <RoundedButton onClick={onNavigate}>Try again</RoundedButton>
      <div className="h-8"></div>
      <h2 className="text-xl font-bold">Other options:</h2>
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
                <ul>
                  {scooter.canGoUphill ? <li>Can climb steep hills</li> : ""}
                  <li>
                    <FontAwesomeIcon className="pr-2" icon={faCheck} />
                    {"Max supported weight: " +
                      scooter.maxSupportedWeight +
                      "kg"}
                  </li>

                  {scooter.portable ? (
                    <li>
                      <FontAwesomeIcon className="pr-2" icon={faCheck} />
                      Portable
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ResultsScreen;
