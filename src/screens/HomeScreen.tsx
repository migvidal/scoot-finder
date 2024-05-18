import { ReactNode } from "react";
import RoundedButton from "../components/RoundedButton";
import { useT } from "talkr";
import { useAutocompleteT } from "../i18n/translate";

function HomeScreen({ children }: { children: ReactNode }) {
  const { T } = useAutocompleteT();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-bold text-center px-4">
        {T("find-your-perfect-scooter")}
        <span className="text-yellow-600">!</span>
      </h1>
      <div className="py-10"></div>
      {children}
    </div>
  );
}
export default HomeScreen;
