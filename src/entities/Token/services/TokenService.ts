import { STORAGE_KEY } from '../constants/storageKey'

interface ITokenService {
  getToken: () => string | null
  removeToken: () => void
  setToken: (token: string) => void
}

export const TokenService: ITokenService = {
  getToken: () => localStorage.getItem(STORAGE_KEY),
  removeToken: () => localStorage.removeItem(STORAGE_KEY),
  setToken: (token: string) => localStorage.setItem(STORAGE_KEY, token),
}
