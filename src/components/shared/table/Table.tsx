import { ReactNode } from "react";

export interface Column {
  title: string;
  key: string;
  renderCell?: (row: Record<string, any>, key: string) => ReactNode; 
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}

const Table = ({ columns, data }: TableProps) => {
  if (!columns.length)
    return null

  const renderCellValue = (row: Record<string, any>, key: string, renderCellFn?: (row: Record<string, any>, key: string) => ReactNode) => {
    if (renderCellFn) {
      return renderCellFn(row, key);
    }

    return row?.[key] || "";
  }

  return (
    <table className="w-full h-auto relative">
      <thead className="sticky top-0 bg-white">
        <tr className="border-b border-neutral-200">
          {
            columns.map(({ title, key }: Column) => (
              <th className="py-[18px] px-4 text-sm font-bold box-border text-start" key={`header-${key}`}>
                {title}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row, rowIndex) => (
            <tr className="border-b border-neutral-200" key={`row-${rowIndex}`}>
              {
                columns.map(({ key, renderCell }: Column, cellIndex: number) => (
                  <td className="py-6 px-4" key={`cell-${rowIndex}-${cellIndex}-${key}`}>
                    {renderCellValue(row, key, renderCell)}
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table;