import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { axiosInstance } from '@/shared/api/axiosInstance'
import { LoginReq } from './types/LoginReq'
import { LoginRes } from './types/LoginRes'

const login = (values: LoginReq): Promise<LoginRes> =>
  axiosInstance
    .post<LoginRes>('auth/admin/signin', values)
    .then((res) => res.data)

export const useLogin = () =>
  useMutation<LoginRes, AxiosError<{ message: string }>, LoginReq>({
    mutationFn: login,
  })
