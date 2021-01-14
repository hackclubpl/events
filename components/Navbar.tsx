import React, { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => (
  <nav className="bg-hcPrimary text-light top-0 left-0 w-full fixed z-20">
    <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-24">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <h3 className="text-2xl font-bold m-0">Warsaw HackClub Events</h3>
            <a href="https://hackclub.pl" className="hover:underline">
              by Warsaw HackClub
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <a className="px-3 py-2 rounded-md text-md font-medium hover:border-light border-2 border-transparent transition">
                  Lista wydarzeń
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
