import { useLocation } from "react-router-dom";

export function getParam(paramKey: string): string | null {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(paramKey);
}
