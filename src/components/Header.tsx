'use client';

import Image from 'next/image';
import { useFetchMovies } from '../../hooks/getMovies';
import { baseImgUrl } from '../../constants/baseUrl';
import { movieI } from '../../utils/interface';
import Loader from './Loader';

const Header = () => {
  const { movieData, loading } = useFetchMovies(`/api/getMovieById/424`);

  // const { movieData, loading, error, fetchMovies } = useFetchMovies(
  //   `/api/findMovieByTitle/${searchQuery}`
  // );

  // const handleSearch = () => {
  //   fetchMovies();
  // };

  if (!movieData) {
    return <Loader />;
  }

  // console.log(movieData);

  const movies: movieI = movieData;

  const { backdrop_path, title, tagline, popularity, overview, vote_average } =
    movies;

  const imgUrl = `${baseImgUrl}original${backdrop_path}`;

  return (
    <header className="relative h-[35rem] flex-center">
      <Image src={imgUrl} alt="" fill className="absolute w-full" />

      <div className="text-white relative z-10 section ">
        <div className="w-screen">
          <div className="w-[40ch] flex flex-col gap-4">
            <h1 className="text-4xl font-bold">
              {title} : {tagline}
            </h1>

            <div className="flex-center gap-12 text-sm">
              <div className="flex-center gap-2">
                <Image src="/icons/imdb.png" alt="" width={35} height={15} />
                <span>{Number(popularity).toFixed(1)}/100</span>
              </div>
              <div className="flex-center gap-2">
                <Image src="/icons/tomato.png" alt="" width={16} height={16} />
                <span>{Number(vote_average).toFixed(0)}0%</span>
              </div>
            </div>
            <div className="text-sm">{overview}</div>
            <button className="uppercase bg-rose px-4 py-2 rounded-md max-w-max">
              watch trailer
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
