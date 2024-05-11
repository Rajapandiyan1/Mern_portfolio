"use client"
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <nav style={{minHeight:'10vh'}} className="bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                  <h2  className="text-white font-bold">Rajapandiyan</h2>
              </div>
              <div className="block md:hidden">
                  <button onClick={toggleMenu} type="button" className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </button>
              </div>
              <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                      <Link href="/" className="text-white font-bold text-decoration-none hover:text-gray-300">Home</Link>
                      <Link href="/About" className="text-white font-bold text-decoration-none hover:text-gray-300">About</Link>
                      <Link href="/Project" className="text-white font-bold text-decoration-none hover:text-gray-300">Project</Link>
                      <Link href="/Contact" className="text-white font-bold text-decoration-none hover:text-gray-300">Contact</Link>
                      <Link href="/Resume" className="text-white font-bold text-decoration-none hover:text-gray-300">Resume</Link>
                  </div>
              </div>
          </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
          <div className="md:hidden">
              <div className="px-3 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <Link href="/" className="text-white font-bold text-decoration-none hover:text-gray-300">Home</Link>
                      <Link href="/About" className="text-white font-bold text-decoration-none hover:text-gray-300">About</Link>
                      <Link href="/Project" className="text-white font-bold text-decoration-none hover:text-gray-300">Project</Link>
                      <Link href="/Contact" className="text-white font-bold text-decoration-none hover:text-gray-300">Contact</Link>
                      <Link href="/Resume" className="text-white font-bold text-decoration-none hover:text-gray-300">Resume</Link>  </div>
          </div>
      )}
  </nav>
  
    );
};

export default Header;
