import { FC } from 'react'
import { ICourse, useGetCourses } from '@/entities/Course'
import { Table } from '@/shared/ui/table'
import { columns } from './columns'

export const Courses: FC = () => {
  const { data } = useGetCourses()

  return <Table<ICourse> columns={columns} data={data} />
}
