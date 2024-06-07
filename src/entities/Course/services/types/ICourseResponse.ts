import { ICourseComment } from '@/entities/CourseCommen'
import { ITeacher } from '@/entities/Teacher'

export interface ICourseResponse {
  completed_lessons_count: number
  duration: number
  _id: string
  name: string
  short_description: string
  description: string
  icon: string
  lessons_count: number
  course_level: string
  manual: string
  is_enrolled: boolean
  categories: [{}]
  enrolled_count: number
  teacher: ITeacher
  course_comment: ICourseComment
  quiz_count: number
  is_saved: boolean
  comments_count: number
  course_rate: number
}
