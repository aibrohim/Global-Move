import {
  flexRender,
  getCoreRowModel,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table'

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
    <div className="overflow-x-auto bg-white overflow-y-auto relative">
      <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ width: `${header.getSize()}px` }}
                  className="bg-surface-light-subtle border-b border-base-200 px-3 py-[10px] text-left font-normal"
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
                  className="px-3 py-2 border-b border-base-200"
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
