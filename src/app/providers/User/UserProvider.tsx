import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { TokenService } from '@/entities/Token'

interface IUserProviderValues {
  isSignedIn: boolean
  logOut: () => void
  logIn: (token: string) => void
}

const UserContext = createContext<IUserProviderValues>({
  isSignedIn: false,
  logOut: () => {},
  logIn: () => {},
})

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(TokenService.getToken())

  useEffect(() => {
    if (token) {
      TokenService.setToken(token)
    } else {
      TokenService.removeToken()
    }
  }, [token])

  const logOut = useCallback(() => {
    setToken(null)
  }, [])

  const logIn = useCallback((newToken: string) => {
    setToken(newToken)
  }, [])

  const contextValues = useMemo<IUserProviderValues>(
    () => ({
      isSignedIn: !!token,
      logOut,
      logIn,
    }),
    [token, logOut, logIn]
  )

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = (): IUserProviderValues => {
  const values = useContext(UserContext)

  if (!values) throw Error('useUser must be called inside an UserProvider')

  return values
}
