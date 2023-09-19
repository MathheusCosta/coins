import { DataTable } from "@/components/table";
import { useCurrencyStore } from "@/stores/currency.store";
import { TableItem } from "@/utils/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TableItem>[] = [
  {
    accessorKey: "name",
    header: "Nome da moeda",
  },
  {
    accessorKey: "symbol",
    header: "Simbolo",
  },
  {
    accessorKey: "value",
    header: "Valor",
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("value")}</div>
    ),
  },
  {
    accessorKey: "convertedValue",
    header: "Valor convertido",
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("convertedValue")}</div>
    ),
  },
];

const Table = () => {
  const { currencyTableData } = useCurrencyStore((state) => state);

  return <DataTable columns={columns} data={currencyTableData} />;
};

export default Table;
