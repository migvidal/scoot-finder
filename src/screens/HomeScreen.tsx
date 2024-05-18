import { ReactNode } from "react";
import RoundedButton from "../components/RoundedButton";
import { useT } from "talkr";
import { useAutocompleteT } from "../i18n/translate";
import ExtendedLogo from "../components/ExtendedLogo";

function HomeScreen({ children }: { children: ReactNode }) {
  const { T } = useAutocompleteT();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center">
        <h1 className="text-6xl font-bold px-4 text-center max-w-sm">
          {T("find-your-perfect-scooter")}
          <span className="text-yellow-600">!</span>
        </h1>
        <ExtendedLogo className="p-10 h-full w-full sm:w-72"/>
      </div>
      <div className="py-10"></div>
      {children}
    </div>
  );
}
export default HomeScreen;
