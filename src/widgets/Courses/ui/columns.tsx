import { ColumnDef } from '@tanstack/react-table'
import { Edit, Eye, Play, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ICourse } from '@/entities/Course'

export const columns: ColumnDef<ICourse>[] = [
  {
    accessorKey: 'name',
    header: 'Kurs nomi',
  },
  {
    accessorKey: 'description',
    header: 'Tavsifi',
  },
  {
    accessorKey: 'lessonsCount',
    header: 'Dars soni',
    cell: ({ renderValue }) => (
      <div className="flex items-center gap-2">
        <Play />
        {renderValue() as number}
      </div>
    ),
  },
  {
    accessorKey: 'duration',
    header: 'Davomiyligi',
  },
  {
    header: 'Tahrirlash',
    cell: () => (
      <div className="flex items-center gap-2">
        <Button size="icon" variant="default" aria-label="make visible">
          <Eye width={18} hanging={18} />
        </Button>
        <Button size="icon" variant="default">
          <Edit width={18} hanging={18} />
        </Button>
        <Button size="icon" variant="destructive">
          <Trash width={18} hanging={18} />
        </Button>
      </div>
    ),
  },
]
