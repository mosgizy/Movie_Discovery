import Error from "next/error";
import { useEffect,useState } from "react"
import { movieI } from "../utils/interface";

export const useFetchMovies = (url: string) => {
  const [movieData, setMovieData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState();

  const fetchMovies = async () => {
      try {
        const res = await fetch(url)

        const data = await res.json()
        // console.log(data)
        setMovieData(data)
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(false)
        setError(error as any)
      }
    }

  useEffect(() => { 
    fetchMovies()
  }, [])
  
  return {movieData,loading,error,fetchMovies}
}