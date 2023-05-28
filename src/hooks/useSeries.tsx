import { getFromMDB } from "."
import { Movie, MovieListResponse, MovieTrailerResponse } from "../types/types"

const useSeries = () => {
  const getSeries = async (
    utl: string,
    errorCallback?: any
  ): Promise<MovieListResponse | Movie | MovieTrailerResponse | undefined> => {
    try {
      return await getFromMDB(utl)
    } catch (error: any) {
      console.log(error)
      if (errorCallback) errorCallback(error)
    }
  }

  const searchSeries = async () => {
    try {
    } catch (error) {}
  }

  const getGenres = () => {}

  const values = {
    getSeries,
    search: searchSeries,
  }

  return values
}

export default useSeries
