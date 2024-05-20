import { ReactNode } from "react";
import { useAutocompleteT } from "../i18n/translate";
import ExtendedLogo from "../components/ExtendedLogo";

export default function HomeScreen({ children }: { children: ReactNode }) {
  const { T } = useAutocompleteT();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-wrap sm:flex-nowrap sm:flex-row-reverse items-center justify-center">
        <ExtendedLogo className="h-full w-80 mb-4 sm:-ml-20" />
        <div className="mb-4 max-w-sm">
          <h1 className="text-6xl font-bold">
            {T("find-your-perfect-scooter")}
          </h1>
          <p className="text-xl font-bold py-4">
            {T("answer-a-few-questions")}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
