import { ICourse } from '../../types/ICourse'
import { ICourseResponse } from '../types/ICourseResponse'

export const courseResponseMapper = ({
  _id,
  comments_count,
  lessons_count,
  completed_lessons_count,
  course_level,
  enrolled_count,
  course_comment,
  course_rate,
  quiz_count,
  is_enrolled,
  is_saved,
  ...courseRes
}: ICourseResponse): ICourse => ({
  id: _id,
  commentsCount: comments_count,
  lessonsCount: lessons_count,
  completedLessonsCount: completed_lessons_count,
  courseLevel: course_level,
  enrolledCount: enrolled_count,
  courseComment: course_comment,
  courseRate: course_rate,
  quizCount: quiz_count,
  isEnrolled: is_enrolled,
  isSaved: is_saved,
  ...courseRes,
})
