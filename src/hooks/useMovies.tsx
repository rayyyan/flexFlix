import { getFromMDB } from "."
import { Movie, MovieListResponse, MovieTrailerResponse } from "../types/types"

const useMovies = () => {
  const getMovies = async (
    utl: string,
    errorCallback?: any
  ): Promise<MovieListResponse | Movie | MovieTrailerResponse | undefined> => {
    try {
      const movies = await getFromMDB(utl)
      return movies
    } catch (error: any) {
      console.log(error)
      if (errorCallback) errorCallback(error)
    }
  }

  const getGenres = () => {}

  const values = {
    getMovies,
    getGenres,
  }

  return values
}

export default useMovies
