import React, {useState, useEffect} from 'react';
// npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon, InlineIcon } from '@iconify/react';
import hamburgerIcon from '@iconify-icons/mdi/hamburger';

function useWindowSize(){
    const [size, setSize] = useState([window.innerHeight, window.innerWidth])
    
    useEffect(() =>{
    const handleResize = () =>{
        setSize([window.innerHeight, window.innerWidth])
    }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])
    return size;
}

function Nav(props){

    const {
        setContentSelected,
        contentSelected,
    }= props

    const[height, width] = useWindowSize()

    return(
        <>
        {(width >= 400) && 
            <div className="">
                <nav className="border split-nav navbar  ">
                    <div className="nav-brand">
                        <h3><a href="/"><strong>Neil Dino</strong></a></h3>
                    </div>
                    <div className='collapsible'>
                        <input id="collapsible1" type="checkbox" name="collapsible1"/>
                        <label htmlFor="collapsible1">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                            <div className="bar4"></div>
                        </label>
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
        }

        {(width <= 400) &&
            <div>
                <nav className="border split-nav navbar  ">
                    <div className="nav-brand">
                            <h3><a href="/"><strong>Neil Dino</strong></a></h3>
                    </div>
                    <div className="collapsible">
                        <Icon className="inline right" icon={hamburgerIcon} />
                    </div>
                </nav>
            </div>
        
        }
        </> 
        
    )

}

export default Nav;