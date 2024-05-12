import { currentAnswers } from "../AnswersState";
import RoundedButton from "../RoundedButton";
import { calculateResult } from "../Scooters";

function ResultsScreen({ onNavigate }: { onNavigate: () => any }) {
  const bestScooter = calculateResult(currentAnswers)[0];
  const otherScooters = calculateResult(currentAnswers);
  otherScooters.shift();

  return (
    <div className="max-w-xl flex flex-col items-center">
      {/* Best scooter */}
      <h1 className="text-3xl font-bold text-center px-4">
        This is your perfect scooter:
      </h1>
      <div className="flex flex-col items-center bg-yellow-300 dark:bg-yellow-400 p-8 rounded-2xl text-black m-4">
        <img src={bestScooter.getImgPath()} alt={bestScooter.getFullName()} />
        <h2 className="text-xl font-bold">{bestScooter.getFullName()}</h2>
        <p>{bestScooter.canGoUphill ? "Can go uphill" : ""}</p>
        <p>
          {"Max supported weight: " + bestScooter.maxSupportedWeight + "kg"}
        </p>
        <p>{bestScooter.portable ? "Portable" : ""}</p>
      </div>
      <h2 className="text-xl font-bold">Other choices:</h2>
      <table>
        <tbody>
          {/* Other scooters */}
          {otherScooters.map((scooter) => {
            return (
              <tr key={scooter.id.toString()}>
                <td>
                  <div className="flex flex-col items-center p-8 rounded-2xl border m-4">
                    <img
                      src={scooter.getImgPath()}
                      alt={scooter.getFullName()}
                    />
                    <p className="text-lg">{scooter.getFullName()}</p>
                    <p>{scooter.canGoUphill ? "Can go uphill" : ""}</p>
                    <p>
                      {"Max supported weight: " +
                        scooter.maxSupportedWeight +
                        "kg"}
                    </p>
                    <p>{scooter.portable ? "Portable" : ""}</p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <RoundedButton children="Try again" onClick={onNavigate} />
    </div>
  );
}
export default ResultsScreen;
