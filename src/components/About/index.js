import React from 'react';
import profilePic from '../../assets/images/headshot.jpg'
// npm install --save-dev @iconify/react @iconify/icons-vscode-icons
import  Icon from '@iconify/react';
import fileTypeMongo from '@iconify/icons-vscode-icons/file-type-mongo';




function About(){
    return(
        <div className=" ">
            <div className="row flex-spaces">
                <div className="align-top col-4 container-sm paper margin border child-borders" id="about-left">
                    <img src={profilePic} alt="A headshot of me" className="" id="profile-pic" width="400" height="400"/>
                    <div id="skills" className="paper">
                        <h3 id="tech-title">Technologies</h3>
                        <div className="icons">
                        <Icon icon={fileTypeMongo} width="3em"/>
                        <span class="iconify" data-icon="vscode-icons:file-type-reactjs" data-inline="false"></span>
                        <span class="iconify" data-icon="logos:nodejs" data-inline="false"></span>
                        <span class="iconify" data-icon="logos:bootstrap" data-inline="false"></span>
                        <span class="iconify" data-icon="fa-brands:git-square" data-inline="false"></span>
                        <span class="iconify" data-icon="simple-icons:csswizardry" data-inline="false"></span>
                        <span class="iconify" data-icon="vscode-icons:file-type-mysql" data-inline="false"></span>
                        <span class="iconify" data-icon="logos:materializecss" data-inline="false" data-width="1.5em"></span>
                        </div>
                    </div>
                   
                </div>
                
                <div className="col-7 paper border margin child-borders" id="about-right">
                    <div className="paper border padding-none" id="about-heading">
                        <h2><strong>Neil Dino</strong></h2>
                        <h4><strong>Web Developer</strong></h4>
                    </div>
                    <p className="about-me paper">
                        
                        A passionate full-stack web developer striving to create unique, fluid, and complex web solutions 
                        that alleviate modern problems and genuinely cultivate a positive impact.  My solid foundation  sales and 
                        marketing gained through work experience and earning an Associates in Business, combined with my technical 
                        skills acquired through earning my Full-Stack Coding Certificate at UC Berkeley, I am a valuable asset to 
                        any team.  In addition to my ability to write clean scalable code, my interpersonal and leadership skills 
                        allow me to be a liaison between departments or clients, and even help close deals making me an integral 
                        collaborator in a company of any size! 
                        <br></br>
                        <br></br>
                        Outside of my professional life I am an avid snowboarder and outdoor enthusiast.  I love getting outdoors and 
                        spending time with my wife Andrea and boston terrier named Gilbert.  I am a huge foodie that enjoys cooking as well as
                        finding excellent restaurants and love pairing foods with unique wines, craft beers or artisan cocktails!
                    </p>
                
                    
                </div>

            </div>
           
        </div>
    )
}

export default About;