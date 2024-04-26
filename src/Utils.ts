import { useLocation } from "react-router-dom";

export function getParam(paramKey: string): string | null {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(paramKey);
}

export class URLBuilder {
  #baseUrl: string;
  #queryParameters: string[] = [];
  addQueryParameter(key: string, value: string): URLBuilder {
    const parameter = key + "=" + value
    this.#queryParameters.push(parameter);
    return this;
  }
  build(): string {
    const joinedParams = this.#queryParameters.join("&");
    return this.#baseUrl + "?" + joinedParams;
  }
  constructor(baseUrl: string) {
    this.#baseUrl = baseUrl;
  }
}
