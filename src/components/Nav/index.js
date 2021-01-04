import React, {useState, useEffect} from 'react';
// npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon, InlineIcon } from '@iconify/react';
import hamburgerIcon from '@iconify-icons/mdi/hamburger';

//react scroll
    import {Link} from 'react-scroll';

//material ui for drawer
import {Drawer, List, ListItem, ListItemText} from '@material-ui/core';

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

    //Drawer props
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const menuList = [
        {
            name: "About",
            content: "about"
        },
        {
            name: "Portfolio",
            content: "portfolio"
        },
        {
            name: "Contact Me",
            content: "contact"
        },
        {
            name: "Resume",
            content: "resume"
        },
    ]
    

    const {
        setContentSelected,
        contentSelected,
    }= props

    const[height, width] = useWindowSize()

    function handleOpen(){
        window.alert('button pressed')
    }

    return(
        <>
        {(width >= 400) && 
            <div className="">
                <nav className="border fixed split-nav navbar  ">
                    <div className="nav-brand">
                        <h3><a href="/"><strong>Neil Dino</strong></a></h3>
                    </div>
                    <div className='collapsible'>
                        
                        
                    </div>

                    <div className="collapsible-body">
                    <ul className="inline ">
                            <li>
                                <Link activeClass='active' to='about' spy={true} smooth={true}>About</Link>
                            </li>
                            <li>
                                <Link activeClass='active' to='portfolio' spy={true} smooth={true}>Portfolio</Link>
                            </li>
                            <li>
                                <Link activeClass='active' to='contact' spy={true} smooth={true}>Contact</Link>
                            </li>
                            <li>
                                <Link activeClass='active' to='resume' spy={true} smooth={true}>Resume</Link>
                            </li>
                            {/* <li>
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
                            </li> */}

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
                    <input id="collapsible1" type="checkbox" name="collapsible1"/>
                    <label id="hamburger"><Icon className="inline right" htmlfor="collapsible1" onClick={handleDrawerOpen} icon={hamburgerIcon}/></label> 
                    
                    </div>
                </nav>
                <Drawer anchor= 'left' open={open} onClose={handleDrawerClose}>
                    <div className=''>
                        <List>
                            {menuList.map((list) => (
                                <ListItem
                                    button key={list.name}
                                    onClick={handleDrawerClose}
                                    
                                    >
                                <ListItemText primary={list.name} />
                                </ListItem>
                            ))}
                        </List>
                    </div>

                </Drawer>
            </div>


        
        }
        </> 
        
    )

}

export default Nav;