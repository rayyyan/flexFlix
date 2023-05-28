import { API_KEY, BASE_URL } from "../utils/config"

export const getFromMDB = async (url: string) => {
  const thereIsQueryParams = url.includes("?")
  const API_URL = `${BASE_URL}${url}${
    thereIsQueryParams ? "&" : "?"
  }api_key=${API_KEY}`

  const response = await fetch(API_URL, { method: "GET" })
  return response.json()
}
