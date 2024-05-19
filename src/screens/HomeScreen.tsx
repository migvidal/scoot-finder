import { ReactNode } from "react";
import RoundedButton from "../components/RoundedButton";
import { useT } from "talkr";
import { useAutocompleteT } from "../i18n/translate";
import ExtendedLogo from "../components/ExtendedLogo";

function HomeScreen({ children }: { children: ReactNode }) {
  const { T } = useAutocompleteT();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-wrap sm:flex-nowrap sm:flex-row-reverse items-center justify-center">
        <ExtendedLogo className="h-full w-80 mb-4"/>
        <h1 className="text-6xl font-bold mb-4 px-4 text-center max-w-sm">
          {T("find-your-perfect-scooter")}
          <span className="text-yellow-600">!</span>
        </h1>
      </div>
      {children}
    </div>
  );
}
export default HomeScreen;
