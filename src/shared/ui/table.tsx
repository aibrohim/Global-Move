import {
  flexRender,
  getCoreRowModel,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table'
import { cn } from '@/lib/utils'

interface TableProps<D> extends Partial<TableOptions<D>> {}

export const Table = <D extends unknown>({
  columns = [],
  data = [],
  ...props
}: TableProps<D>) => {
  const { getHeaderGroups, getRowModel } = useReactTable<D>({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    ...props,
  })

  return (
    <div className="overflow-hidden relative rounded-md border border-solid border-gray-200">
      <table className="border-collapse table-auto w-full whitespace-no-wrap table-striped relative">
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index, arr) => (
                <th
                  key={header.id}
                  style={{ width: `${header.getSize()}px` }}
                  className={cn(
                    'bg-surface-light-subtle border-b border-solid border-gray-200 px-3 py-[10px] text-left font-normal',
                    {
                      'rounded-tl-md': !index,
                      'rounded-tr-md': index === arr.length,
                    }
                  )}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-3 py-2 border-b border-solid border-gray-200"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
