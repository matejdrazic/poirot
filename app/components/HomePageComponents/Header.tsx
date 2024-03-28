"use client"
import React, { useState } from 'react';
import Logo from './Logo';
import WalletMultiButton from '../WalletMultiButton';
const Header = () => {
  // State to control the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-transparent border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Poirot</span>
          </a>
          <button
            onClick={toggleMenu} 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isMenuOpen} 
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col gap-4 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
              <li className='mt-2'>
                <a href="#"  aria-current="page">Home</a>
              </li>
              <li className='mt-2'>
                <a href="#"  aria-current="page">Audits</a>
              </li>
              <li className='mt-2'>
                <a href="#"  aria-current="page">Leaderboards</a>
              </li>
              <li>
                <WalletMultiButton/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
