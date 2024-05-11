"use client"
import { useState } from 'react';
import Link from 'next/link';
import { TiThMenu } from "react-icons/ti";
import 'bootstrap/dist/js/bootstrap.min.js';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-indigo">
        
          <h2 className="navbar-brand ps-2 text-white font-bold" > Rajapandiyan</h2>
          <button className="ms-auto me-3 navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {/* <TiThMenu size={30}/>
             */}
             <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ps-3 ps-md-1">
              <li className="nav-item">
                <Link className="nav-link text-bold text-white active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-bold text-white" href="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-bold text-white" href="/Project">Project</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-bold text-white " href="/Contact" >Contact</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link text-bold text-white " href="/Resume" >Resume</Link>
              </li>
            </ul>
          </div>
    
      </nav>
  
    );
};

export default Header;
