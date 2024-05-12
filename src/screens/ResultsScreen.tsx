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
        <img className="rounded-xl mb-4" src={bestScooter.getImgPath()} alt={bestScooter.getFullName()} />
        <h3 className="text-xl font-bold">{bestScooter.getFullName()}</h3>
        <p>{bestScooter.canGoUphill ? "Can climb steep hills" : ""}</p>
        <p>
          {"Max supported weight: " + bestScooter.maxSupportedWeight + "kg"}
        </p>
        <p>{bestScooter.portable ? "Portable" : ""}</p>
      </div>
      <RoundedButton onClick={onNavigate}>Try again</RoundedButton>
      <div className="h-8"></div>
      <h2 className="text-xl font-bold">Other options:</h2>
      <table>
        <tbody>
          {/* Other scooters */}
          {otherScooters.map((scooter) => {
            return (
              <tr key={scooter.id.toString()}>
                <td>
                  <div className="flex flex-col p-8 rounded-2xl border border-gray-200 dark:border-gray-800 m-4">
                    <img
                    className="rounded-xl mb-4"
                      src={scooter.getImgPath()}
                      alt={scooter.getFullName()}
                    />
                    <h3 className="text-xl font-bold">
                      {scooter.getFullName()}
                    </h3>
                    <ul className="list-disc">
                      {scooter.canGoUphill ? (
                        <li>Can climb steep hills</li>
                      ) : (
                        ""
                      )}
                      <li>
                        {"Max supported weight: " +
                          scooter.maxSupportedWeight +
                          "kg"}
                      </li>
                      {scooter.portable ? <li>Portable</li> : ""}
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>
  );
}
export default ResultsScreen;
