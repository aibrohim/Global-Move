export interface ICourseComment {
  _id: string
  comment_body: string
  user_profile: {
    first_name: string
    last_name: string
    image: string
  }
  created_at: string
  is_hide: boolean
}
