import { ReactNode } from "react";

function RoundedButton({
  onClick,
  type,
  children,
}: {
  onClick: () => any;
  type: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
}) {
  return (
    <button
      className="rounded-md rounded-tr-2xl rounded-br-2xl bg-yellow-300 dark:bg-yellow-600 px-4 py-2"
      onClick={onClick}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
}
export default RoundedButton;
