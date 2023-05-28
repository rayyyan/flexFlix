import Login from "../screens/auth/Login"
import RegisterScreen from "../screens/auth/Register"
import ProfileScreen from "../screens/main/ProfileScreen"
import SeriesScreen from "../screens/main/SeriesScreen"
import MoviesScreen from "../screens/main/movieScreen"

export const ScreensList = [
  {
    route: "Movies",
    label: "Movies",
    component: MoviesScreen,
    notification: 0,
  },
  {
    route: "Series",
    label: "Series",
    component: SeriesScreen,
    notification: 0,
  },
  {
    route: "Profile",
    label: "Profile",
    icon: "Profile",
    component: ProfileScreen,
    notification: 0,
  },
]
export const authScreensList = [
  {
    route: "Login",
    label: "Login",
    component: Login,
    notification: 0,
  },
  {
    route: "Register",
    label: "Register",
    component: RegisterScreen,
    notification: 0,
  },
]
