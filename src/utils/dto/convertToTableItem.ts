import { TableItem } from "@/utils/types";
import { COINS, CoinsName } from "../enums";

type CoinsNameKey = keyof typeof CoinsName;

export const convertToTableItemDTO = (
  value: GetCurrencyAPIResponse,
  coin: string,
  coinValue: string
): TableItem[] => {
  return Object.entries(value[coin])
    .filter(([key]) => COINS.find((c) => c.value === key))
    .map(([key, value]: [string, number]) => ({
      id: key,
      name: CoinsName[key as unknown as CoinsNameKey],
      symbol: key.toUpperCase(),
      value: parseFloat(value.toFixed(2)),
      convertedValue: coinValue
        ? parseFloat((parseFloat(coinValue) * value).toFixed(2))
        : 1,
    }));
};
