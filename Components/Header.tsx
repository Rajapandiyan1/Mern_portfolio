"use client"
import { useState } from 'react';
import Link from 'next/link';
import { TiThMenu } from "react-icons/ti";
// import 'bootstrap/dist/js/bootstrap.min.js';

const Header = () => {
let [open,isopen]=useState(false)
    return (
        <nav className="bg-indigo">
    
        <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
                <h2 className="text-white text-lg font-bold ms-4">Rajapandiyan</h2>
            </div>
            <div className="md:hidden">
                <button onClick={()=>{isopen(!open)}} className="text-white me-4">
                <TiThMenu size={30}/>
                </button>
            </div>
            <div className="hidden md:flex flex-grow justify-end items-center me-4">
                <ul className="flex space-x-4">
                    <li><Link href="/" className="text-white font-bold text-decoration-none">Home</Link></li>
                    <li><Link href="/About" className="text-white font-bold  text-decoration-none">About</Link></li>
                    <li><Link href="/Project" className="text-white font-bold  text-decoration-none">Project</Link></li>
                    <li><Link href="/Contact" className="text-white font-bold  text-decoration-none">Contact</Link></li>
                    <li><Link href="/Resume" className="text-white font-bold  text-decoration-none">Resume</Link></li>
                </ul>
            </div>
        </div>
    
   { open && <div className="md:hidden">
        
        <ul className="flex flex-column gap-y-5 mb-0 pb-3">
                    <li><Link href="/" className="text-white font-bold  text-decoration-none">Home</Link></li>
                    <li><Link href="/About" className="text-white font-bold  text-decoration-none">About</Link></li>
                    <li><Link href="/Project" className="text-white font-bold  text-decoration-none">Project</Link></li>
                    <li><Link href="/Contact" className="text-white font-bold  text-decoration-none">Contact</Link></li>
                    <li><Link href="/Resume" className="text-white font-bold  text-decoration-none">Resume</Link></li>
                </ul>
        
    </div>}
</nav>

    //     <nav className="navbar navbar-expand-lg bg-indigo">
        
    //       <h2 className="navbar-brand ps-2 text-white font-bold" > Rajapandiyan</h2>
    //       <button className="ms-auto me-3 navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //          
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav ps-3 ps-md-1">
    //           <li className="nav-item">
    //             <Link className="nav-link text-bold text-white active" aria-current="page" href="/">Home</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link text-bold text-white" href="/About">About</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link text-bold text-white" href="/Project">Project</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link text-bold text-white " href="/Contact" >Contact</Link>
    //           </li>
              
    //           <li className="nav-item">
    //             <Link className="nav-link text-bold text-white " href="/Resume" >Resume</Link>
    //           </li>
    //         </ul>
    //       </div>
    
    //   </nav>
  
    );
};

export default Header;
