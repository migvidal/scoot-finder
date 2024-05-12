import { currentAnswers } from "../AnswersState";
import RoundedButton from "../RoundedButton";
import { calculateResult } from "../Scooters";

function ResultsScreen({ onNavigate }: { onNavigate: () => any }) {
  const results = calculateResult(currentAnswers);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        This is your perfect scooter:
      </h1>
      <table>
        {results.map((result) => {
          return (
            <tr>
              {result.map((scooter) => (
                <td className="flex flex-col items-center">
                  <img src={scooter.getImgPath()} alt={scooter.getFullName()} />
                  <p>{scooter.getFullName()}</p>
                </td>
              ))}
            </tr>
          );
        })}
      </table>
      <RoundedButton children="Try again" onClick={onNavigate} />
    </div>
  );
}
export default ResultsScreen;
