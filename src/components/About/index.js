import React from 'react';
import profilePic from '../../assets/images/headshot.jpg'

function About(){
    return(
        <div className=" ">
            <div className="row flex-spaces">
                <div className="col-4 align-top paper margin border child-borders">
                    <img src={profilePic} alt="A headshot of me" className="" id="profile-pic"/>
                    <div id="skills" className="">
                        <h3>Skills</h3>
                    </div>
                   
                </div>
                
                <div className="col-7 paper border margin child-borders">
                    <div className="paper border padding-none" id="about-heading">
                        <h2>Neil Dino</h2>
                        <h4>Web Developer</h4>
                    </div>
                        <p className="">    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium necessitatibus facere quibusdam vel assumenda, odio doloribus. Earum ea excepturi, saepe maxime atque quos, neque ad itaque fugiat adipisci voluptatum dolore?</p>
                
                    
                </div>

            </div>
           
        </div>
    )
}

export default About;