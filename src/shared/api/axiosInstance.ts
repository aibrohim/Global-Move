import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
