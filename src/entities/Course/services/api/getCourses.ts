import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api/axiosInstance'

import { ICourseResponse } from '../types/ICourseResponse'
import { ICourse } from '../../types/ICourse'
import { courseResponseMapper } from '../mappers/courseResponseMapper'

interface CoursesListRes {
  data: ICourseResponse
}

const getCourses = (): Promise<ICourse[]> =>
  axiosInstance
    .get<CoursesListRes>('/courses/active')
    .then(({ data: { data } }) => [courseResponseMapper(data)])

export const useGetCourses = () =>
  useQuery({
    queryKey: ['Courses'],
    queryFn: getCourses,
  })
