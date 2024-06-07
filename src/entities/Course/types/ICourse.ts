import { ICourseComment } from '@/entities/CourseCommen'
import { ITeacher } from '@/entities/Teacher'

export interface ICourse {
  completedLessonsCount: number
  duration: number
  id: string
  name: string
  short_description: string
  description: string
  icon: string
  lessonsCount: number
  courseLevel: string
  manual: string
  isEnrolled: boolean
  categories: [{}]
  enrolledCount: number
  teacher: ITeacher
  courseComment: ICourseComment
  quizCount: number
  isSaved: boolean
  commentsCount: number
  courseRate: number
}
