"use client"
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={{zIndex:'999',}} className="flex justify-between px-5 py-2 bg-primary ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-indigo text-2xl font-bold">Rajapandiyan</a>
          </div>
          
          <div className="flex md:hidden">
            <button onClick={()=>{toggleMobileMenu()}} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:block bg-indigo-800">
            <ul className="flex space-x-4">
            <li><Link href="/" className="text-white  fond-bold hover:bg-gray-700 block px-3 py-2 rounded-md">Home</Link></li>
            <li><Link href="/About" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md">About</Link></li>
            <li><Link href="/Project" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md">Project</Link></li>
            <li><Link href="/Contact" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md">Contact</Link></li>
            <li><Link href="/Resume" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md">Resume</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div style={{position:"relative",zIndex:'999'}} className="md:hidden" id="mobile-menu">
          <ul className="px-2  pb-3 space-y-1 sm:px-3 bg-indigo-800">
            <li><h3><Link href="/" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md">Home</Link></h3></li>
            <li><Link href="/About" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md">About</Link></li>
            <li><Link href="/Project" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md">Project</Link></li>
            <li><Link href="/Contact" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md">Contact</Link></li>
            <li><Link href="/Resume" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md">Resume</Link></li>
          
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header