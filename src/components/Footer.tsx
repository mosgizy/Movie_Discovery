import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32">
      <div className="flex flex-col gap-9 text-lg font-bold [&>div]:flex-center [&>div]:justify-between max-w-max mx-auto">
        <div className=" text-2xl max-w-max mx-auto gap-12">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className=" gap-12">
          <Link href={'#'}>Conditions of Use</Link>
          <Link href={'#'}>Privacy & Policy</Link>
          <Link href={'#'}>Press Room</Link>
        </div>
        <div>
          <p className="text-center w-full text-[#6B7280]">
            © {year} MovieBox by Adriana Eka Prayudha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
