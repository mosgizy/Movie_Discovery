'use client';

import { useFetchMovies } from '../../hooks/getMovies';
import { movieI } from '../../utils/interface';
import Card from './Card';

const Cards = () => {
  const { movieData, loading } = useFetchMovies('/api/getMovies');

  // console.log(movieData);

  if (!movieData) {
    return <div></div>;
  }

  const movies: movieI[] = movieData;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-20 grid-cols-1">
      {movies?.map((movie) => {
        return <Card movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default Cards;
