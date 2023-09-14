import { useFetchMovies } from "./getMovies";

interface genreI{
  genres: [
    {
      id: number,
      name: string,
    }
  ]
}

export const useGetAllGenres = () => {
  const { movieData } = useFetchMovies('/api/getGenre');

  if (!movieData) {
    return
  }

  const genres: genreI = movieData
  
  const getGenres = (list:number[]) => {
    const genreList = genres.genres.filter((genre: { id: number, name: string }) => list.includes(genre.id))
    return genreList
  }

  return getGenres

}