import React from 'react';


function Nav(props){
    const {
        setContentSelected,
        contentSelected,
    }= props
    return(
        <div className="">
            <nav className="border split-nav navbar  ">
                <div className="nav-brand">
                    <h3><a href="/"><strong>Neil Dino</strong></a></h3>
                </div>
                <div className='collapsible'>
                <input id="collapsible1" type="checkbox" name="collapsible1"/>
                <label for="collapsible1"/
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                </div>

                <div className="collapsible-body">
                <ul className="inline ">
                        <li>
                            <a href="#about" className={`paper-btn ${(contentSelected ==="about") ? 'btn-primary' : 'btn-primary-outline'}`} onClick={() => setContentSelected("about")}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className={`paper-btn ${(contentSelected ==="portfolio") ? 'btn-primary' : 'btn-primary-outline'}`} onClick={() => setContentSelected("portfolio")}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={`paper-btn ${(contentSelected ==="contactForm") ? 'btn-primary' : 'btn-primary-outline'}`} onClick={() => setContentSelected("contactForm")}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#resume" className={`paper-btn ${(contentSelected ==="resume") ? 'btn-primary' : 'btn-primary-outline'}`} onClick={() => setContentSelected("resume")}>
                                Resume
                            </a>
                        </li>

                    </ul>
                </div>
            
            </nav>
        </div>
    )
}

export default Nav;