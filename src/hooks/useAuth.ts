import { useEffect } from "react"
import { auth } from "./firebase"
import { TypeNavigationScreen } from "../navigationTypes"
import { useNavigation } from "@react-navigation/native"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
interface SignUpInParams {
  email: string
  password: string
}
const useAuth = () => {
  const handleLogin = async (params: SignUpInParams, errorCallback?: any) => {
    try {
      await signInWithEmailAndPassword(auth, params.email, params.password)
    } catch (error: any) {
      if (errorCallback) errorCallback(error)
    }
  }

  const handleLogout = async () => {
    try {
    } catch (error) {}
  }

  const handleRegister = async (
    params: SignUpInParams,
    errorCallback?: any
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, params.email, params.password)
    } catch (error: any) {
      if (errorCallback) errorCallback(error)
    }
  }

  const values = {
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
  }

  return values
}

export default useAuth
