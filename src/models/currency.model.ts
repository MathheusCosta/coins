interface GetCurrencyAPIResponse {
  [key: "date" | string]:
    | string
    | {
        [key: string]: number;
      };
}
