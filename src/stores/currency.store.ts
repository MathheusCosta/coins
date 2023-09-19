import { TableItem } from "@/utils/types";
import { create } from "zustand";

interface UseCurrencyStoreProps {
  currencyTableData: TableItem[];
  setCurrencyTableData: (value: TableItem[]) => void;
}

export const useCurrencyStore = create<UseCurrencyStoreProps>((set) => ({
  currencyTableData: [],
  setCurrencyTableData: (value: TableItem[]) =>
    set({ currencyTableData: value }),
}));
