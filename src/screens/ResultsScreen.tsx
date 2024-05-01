import { currentAnswers } from "../AnswersState";
import RoundedButton from "../RoundedButton";
import { calculateResult } from "../Scooters";

function ResultsScreen({ onNavigate }: { onNavigate: () => any }) {
  calculateResult(currentAnswers);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center px-4">
        This is your perfect scooter:
      </h1>
      <RoundedButton children="Try again" onClick={onNavigate} />
    </div>
  );
}
export default ResultsScreen;
