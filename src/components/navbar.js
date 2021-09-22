import React from 'react';
import "./navbar.css";

const Navbar = () => {
    return (
        <>
           <nav className="navbar navbar-expand-md  fixed-top bg-dark navbar-dark">
               <div className="container">

               <a href="#" className="nav-brand">typing test</a>
               <button className="navbar-toggler" data-toggle="collapse" data-target="#ishan"><i className="fa fa-bars"></i> </button>
            
                <div className="collapse navbar-collapse " id="ishan">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a href="#" className="nav-link ">home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link disabled" >service</a></li>
                        <li className="nav-item"><a href="#" className="nav-link disabled">profile</a></li>
                        <li className="nav-item"><a href="https://ishannandwal7.github.io/novelcoronalive.github.io/about.html" className="nav-link">about</a></li>

                    </ul>
                </div>
               </div>
           </nav>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fill-opacity="1" d="M0,32L120,32C240,32,480,32,720,64C960,96,1200,160,1320,192L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fill-opacity="1" d="M0,192L1440,32L1440,0L0,0Z"></path></svg> */}

        </>
    )
}

export default Navbar
