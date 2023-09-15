'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useFetchMovies } from '../../hooks/getMovies';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import Link from 'next/link';
import Cards from '@/components/Cards';
import Footer from '@/components/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // const searchMovies = async () => {
  //   const res = await fetch('/api/findMovieByTitle/meg')
  //   const data = await res.json();
  //   console.log(data)
  // }

  // const searchMovies = useFetchMovies('/api/findMoviesByTitle/the meg')

  // searchMovies()

  // console.log(movieData, loading, error);

  return (
    <main>
      <Nav />
      <Header />
      <section className="section mt-20">
        <div className="flex-center justify-between">
          <h1 className="text-4xl font-bold text-black">Featured Movie</h1>
          <Link href={'#'} className="text-rose">
            See more
          </Link>
        </div>
        <div className="mt-12">
          <Cards />
        </div>
      </section>
      <Footer />
    </main>
  );
}
