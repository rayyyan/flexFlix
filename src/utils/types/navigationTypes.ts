import { NavigatorScreenParams, RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
  Auth: undefined
  Main: NavigatorScreenParams<MainStackParamList>
}
export type AuthStackParamList = {
  Login: undefined
  Register: undefined
  Splash: undefined
  Loading: undefined
}

export type MainStackParamList = {
  Movies: { screen: string; key: string } | undefined
  Series: { screen: string; key: string } | undefined
  Profile: { screen: string; key: string } | undefined
  MSDetail:
    | {
        id?: string
        movie?: boolean
      }
    | undefined
}
export type AllStackParamList = {} & RootStackParamList &
  AuthStackParamList &
  MainStackParamList

//Screens
export type TypeNavigationScreen = NativeStackNavigationProp<
  AllStackParamList,
  keyof AllStackParamList
>

//Routes
export type ScreenRouteProp<RouteName extends keyof MainStackParamList> =
  RouteProp<MainStackParamList, RouteName>
