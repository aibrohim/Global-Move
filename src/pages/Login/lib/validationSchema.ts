import { z } from 'zod'

export const validationSchema = z.object({
  email: z
    .string({ required_error: 'Email must be filled!' })
    .min(10, 'Email must contain at least 10 chars!')
    .email('Invalid email!'),
  password: z
    .string({ required_error: 'Email must be filled!' })
    .min(6, 'Email must contain at least 6 chars!'),
})

export type TFormState = z.infer<typeof validationSchema>
