import React from 'react';


function Nav(){
    return(
        <div className="">
            <nav className="border split-nav navbar dark">
                <div className="nav-brand dark">
                    <h3><a href="/">Neil Dino</a></h3>
                </div>
            
                <ul className="inline dark">
                    <li><a href="#about" className="paper-btn btn-primary">About</a></li>
                    <li><a href="#portfolio" className="paper-btn btn-primary-outline">Portfolio</a></li>
                    <li><a href="#contact" className="paper-btn btn-primary-outline">Contact</a></li>
                    <li><a href="#resume" className="paper-btn btn-primary-outline">Resume</a></li>

                </ul>
            
            </nav>
        </div>
    )
}

export default Nav;