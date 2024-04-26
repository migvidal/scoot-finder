import RoundedButton from "../RoundedButton";

function ResultsScreen({ onNavigate }: { onNavigate: () => any }) {
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
