import { DataTable } from "@/components/table";
import { TableItem } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

const data: TableItem[] = [
  {
    id: "728ed52f",
    convertedValue: 10,
    name: "Real",
    symbol: "BRL",
    value: 5,
  },
  {
    id: "489e1d42",
    convertedValue: 10,
    name: "Dollar",
    symbol: "USD",
    value: 5,
  },
];

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
  return <DataTable columns={columns} data={data} />;
};

export default Table;
