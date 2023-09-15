'use client';

import Image from 'next/image';
import { useFetchMovies } from '../../../../hooks/getMovies';
import {
  FaCalendar,
  FaHome,
  FaTransgender,
  FaTv,
  FaVideo,
} from 'react-icons/fa';
import { baseImgUrl } from '../../../../constants/baseUrl';
import { movieI } from '../../../../utils/interface';
import Loader from '@/components/Loader';

const Details = ({ params }: { params: { id: number } }) => {
  const { movieData, loading } = useFetchMovies(
    `/api/getMovieById/${params.id}`
  );

  // console.log(movieData);

  if (!movieData) {
    return <Loader />;
  }

  const movie: movieI = movieData;

  const menuLists: {
    [key: string]: any;
  } = {
    home: <FaHome />,
    movies: <FaVideo />,
    'tv series': <FaTv />,
    upcoming: <FaCalendar />,
  };

  const getReleaseDate = (releaseDate: string) => {
    const date = new Date(releaseDate).toUTCString();

    return date.slice(0, date.length - 13);
  };

  return (
    <section className="flex font-poppins">
      <aside className="border border-[rgba(0, 0, 0, 0.30)] max-w-max min-h-screen rounded-e-[2.8rem] py-12">
        <div className="flex items-center gap-3 text-2xl flex-[0_0_30%] px-6 mb-20">
          <Image src="/icons/tv.png" alt="" width={40} height={40} />
          <span>MovieBox</span>
        </div>
        <div className="[&>div]:flex-center [&>div]:gap-4 [&>div]:w-full [&>div]:text-xl [&>div]:font-semibold [&>div:hover]:bg-fade-rose-100 [&>div:hover]:text-rose [&>div:hover]:border-r-[3px] [&>div:hover]:border-rose [&>div]:py-5 [&>div]:cursor-pointer [&>div]:px-10 flex gap-3 flex-col items-center font-poppins capitalize text-hash">
          {Object.keys(menuLists).map((menu) => {
            return (
              <div
                key={menu}
                className={`${
                  menu === 'movies' &&
                  'bg-fade-rose-100 text-rose border-r-[3px] border-rose'
                }`}
              >
                <span>{menuLists[menu]}</span>
                <p>{menu}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 font-poppins">
          <div className="border border-[rgb(190,18,60)]/70 bg-[rgb(248,231,235)]/40 px-4 pt-8 pb-4 rounded-3xl max-w-[10rem] mx-auto">
            <p className="text-[0.9375rem] font-semibold text-[rgb(51,51,51)]/80">
              Play movie quizes and earn free tickets
            </p>
            <p className="text-sm text-hash my-2">50k people are playing now</p>
            <button className="rounded-full font-medium font-poppins text-sm text-rose bg-[rgb(190,18,60)]/20 px-4 py-2">
              Start playing
            </button>
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <div className="flex-center gap-3 cursor-pointer text-hash text-xl font-poppins font-medium">
            <Image src="/icons/Logout.svg" alt="" width={40} height={40} />
            <p>Log out</p>
          </div>
        </div>
      </aside>
      <section className="my-8 px-6">
        <div className="relative rounded-[1.25rem] overflow-hidden h-[35rem]">
          <Image
            src={`${baseImgUrl}original${movie?.backdrop_path}`}
            alt=""
            width={2024}
            height={400}
            // objectFit="contain"
            className="w-full absolute object-contain rounded-[1.25rem]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[rgb(255,255,255)]/50 p-4 flex-center justify-center rounded-full cursor-pointer">
            <Image src="/icons/Play.png" alt="" width={53} height={53} />
          </div>
        </div>
        <div className="flex-center justify-between mt-5">
          <div className="flex-center gap-3">
            <p className="text-xl">
              <span data-testid="movie-title">{movie.title}</span> •{' '}
              <span data-testid="movie-release-date">
                {getReleaseDate(movie.release_date)}
              </span>{' '}
              •{' '}
              {movie.runtime && (
                <span data-testid="movie-runtime">
                  {`${Math.floor(movie?.runtime / 60)}hr`}{' '}
                  {`${movie?.runtime % 60}m`}
                </span>
              )}
            </p>
            <div className="flex-center gap-5 text-[0.9375rem] text-rose-100">
              {movie.genres &&
                movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
            </div>
          </div>
          <div className="flex-center gap-1">
            <Image src="/icons/Star.png" alt="" width={24} height={24} />
            <p>
              <span className="text-[#E8E8E8]">8.5</span> |{' '}
              <span className="text-hash">350k</span>
            </p>
          </div>
        </div>
        <div className="mt-8 flex gap-8">
          <p className="text-ligth-hash text-xl" data-testid="movie-overview">
            {movie.overview}
          </p>
          <div className="text-xl [&>button]:w-full [&>button]:py-3 [&>button]:flex-center [&>button]:justify-center [&>button]:gap-2 [&>button]:rounded-xl flex-[0_0_35%] flex flex-col gap-3">
            <button className="bg-rose text-white">
              <Image src="/icons/tickets.svg" alt="" width={24} height={24} />
              <span>See Showtimes</span>
            </button>
            <button className="bg-fade-rose-100">
              <Image src="/icons/List.svg" alt="" width={24} height={24} />
              <span>More watch options</span>
            </button>
          </div>
        </div>
        <div className="mt-8 flex-center gap-6">
          <div className="text-light-hash text-xl flex flex-col gap-5 [&>div>span]:text-rose flex-[0_0_60%]">
            <div>
              Director : <span>Joseph Kosinski</span>
            </div>
            <div>
              Writers : <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
            </div>
            <div>
              Stars : <span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
            </div>
            <div className="flex-center gap-4 border border-[#C7C7C7] rounded-xl">
              <div className="bg-rose rounded-xl text-white px-4 py-2">
                Top rated movie #65
              </div>
              <select
                name=""
                id=""
                className="bg-transparent h-full w-full flex-[0_0_60%] md:flex-[0_0_75%]"
              >
                <option
                  value="Awards
 9 nominations"
                >
                  Awards 9 nominations
                </option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/upcoming.png"
              alt=""
              width={352}
              height={224}
              className="object-contain h-[14rem] w-full"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Details;
