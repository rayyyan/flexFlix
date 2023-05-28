import { User } from "firebase/auth"

export interface UserContext {
  user: User | null
  setUser: (arg: any) => any
}

export type GeneralScreenProps = {
  route: any
  navigation: any
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieListResponse {
  page: number
  results: Movie[]
  total_pages: number
}
export interface MovieTrailerResponse {
  page: number
  results: Trailer[]
}

export type Trailer = {
  id: string
  iso_3166_1: string
  iso_639_1: string
  key: string
  name: string
  official: boolean
  published_at: string
  site: string
  size: number
  type: string
}
export type ObjectValues<T> = T[keyof T]
export const FontWeight = {
  Thin: "100",
  "Extra Light": "200",
  Light: "300",
  Regular: "400",
  Medium: "500",
  "Semi Bold": "600",
  Bold: "700",
  "Extra Bold": "800",
  Black: "900",
} as const
