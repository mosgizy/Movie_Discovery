import Image from 'next/image';
import { menuIcon, searchIcon } from '../../utils/icons';
import { useState } from 'react';
import { useFetchMovies } from '../../hooks/getMovies';

const Nav = () => {
  const [search, setSearch] = useState('the meg');

  const { movieData, loading } = useFetchMovies(
    `/api/findMovieByTitle/${search}`
  );

  console.log(movieData);

  return (
    <nav className="fixed top-8 z-40 w-full text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 section mx-auto">
        <div className="flex items-center gap-3 text-2xl">
          <Image src="/icons/tv.png" alt="" width={40} height={40} />
          <span>MovieBox</span>
        </div>
        <form className="w-full relative text-white hidden md:block">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What do you want to watch"
            className="px-1 py-3 text-base rounded-md bg-transparent border-2 border-white outline-none w-full"
          />
          <span className="absolute top-1/2 -translate-y-1/2 right-4">
            {searchIcon}
          </span>
        </form>
        <div className="flex-center gap-6 place-content-end">
          <span>Sign in</span>
          <span>{menuIcon}</span>
        </div>
        {/* <div className="w-full absolute -bottom-32">
          <div className="w-[35%] mx-auto bg-white text-black rounded-lg px-5 py-3">
            <div className="">
              <Image src={''} alt="" width={70} height={70} />
              <span>hello world</span>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;
