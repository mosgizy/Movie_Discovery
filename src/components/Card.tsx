'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { heartIcon } from '../../utils/icons';
import { baseImgUrl } from '../../constants/baseUrl';
import { useState } from 'react';
import { useGetAllGenres } from '../../hooks/getAllGenres';
import { movieI } from '../../utils/interface';

const Card = ({ movie }: { movie: movieI }) => {
  const router = useRouter();
  const [like, setLike] = useState(false);

  const handleLike = (e: any) => {
    e.stopPropagation();
    setLike((prev) => !prev);
  };

  const getGenres = useGetAllGenres();

  if (!getGenres) {
    return;
  }

  const genres = getGenres(movie.genre_ids);

  return (
    <div
      onClick={() => router.push(`/movie-detail/${movie.id}`)}
      key={movie.id}
      className="w-full md:max-w-max cursor-pointer"
      data-id="movie-card"
    >
      <div className="relative">
        <Image
          src={`${baseImgUrl}original${movie.poster_path}`}
          alt="poster"
          width={250}
          height={370}
          data-testid="movie-poster"
        />
        <div
          className="absolute w-full top-5 right-4 flex justify-end"
          onClick={handleLike}
        >
          <div
            className={`rounded-full cursor-pointer bg-light-gray flex-center justify-center w-[1.875rem] h-[1.825rem] ${
              like ? 'text-rose' : 'text-primary'
            }`}
          >
            <span>{heartIcon}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3 text-gray-900 text-sm">
        <p className="text-gray-400 text-sm font-bold">{movie.release_date}</p>
        <h2 className="text-lg font-bold" data-testid="movie-title">
          {movie.title}
        </h2>
        <div className="flex-center justify-between text-sm">
          <div className="flex-center gap-2">
            <Image src="/icons/imdb.png" alt="" width={35} height={15} />
            <span>{movie.vote_average * 10}/100</span>
          </div>
          <div className="flex-center gap-2">
            <Image src="/icons/tomato.png" alt="" width={16} height={16} />
            <span>90%</span>
          </div>
        </div>
        <p className="text-gray-400">
          {genres &&
            genres.map((gen: { id: number; name: string }, index: number) => {
              return (
                <span key={gen.id}>
                  {gen.name}
                  {index < genres.length - 1 && ', '}
                </span>
              );
            })}
        </p>
      </div>
    </div>
  );
};

export default Card;
