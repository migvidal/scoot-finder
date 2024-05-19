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
