import React from 'react';
import profilePic from '../../assets/images/headshot.jpg'
// npm install --save-dev @iconify/react @iconify/icons-vscode-icons
import  Icon from '@iconify/react';
import fileTypeMongo from '@iconify/icons-vscode-icons/file-type-mongo';

//animations
import GlitchClip from 'react-glitch-effect/core/Clip';
import ReactRotatingText from 'react-rotating-text';



function About(){
    return(
            <div className="" id="about" >
                <div className="container paper row flex-edges border " id="about-container">

                    <div className="col sm-12 md-4 margin center" id="leftside">
                        <GlitchClip duration='2s'>
                            <img src={profilePic} alt="A headshot of me" className="" id="profile-pic" width="400" height="400"/>
                        </GlitchClip>
                        
                        
                        <div id="skills" className="paper border">
                            <h3 id="tech-title">Technologies</h3>
                            <div className="icons">
                                <Icon icon={fileTypeMongo} width="3em"/>
                                <span className="iconify" data-icon="vscode-icons:file-type-reactjs" data-inline="false"></span>
                                <span className="iconify" data-icon="logos:nodejs" data-inline="false"></span>
                                <span className="iconify" data-icon="logos:bootstrap" data-inline="false"></span>
                                <span className="iconify" data-icon="fa-brands:git-square" data-inline="false"></span>
                                <span className="iconify" data-icon="simple-icons:csswizardry" data-inline="false"></span>
                                <span className="iconify" data-icon="vscode-icons:file-type-mysql" data-inline="false"></span>
                                <span className="iconify" data-icon="logos:materializecss" data-inline="false" data-width="1.5em"></span>
                            </div>
                        </div>
                    </div>
                    
                    <div id="rightside" className="col sm-12 md-7">
                        <div className="paper border padding-none" id="about-heading">
                            <h2><strong>Neil Dino</strong></h2>
                            <h4><ReactRotatingText items={['Full Stack Developer', 'React Expert', 'GraphQL Guru', 'Marketing Maniac', 'Sales Superhuman' ]}/></h4>
                        </div>
                        <p className="about-me paper margin-right-small border">
                            
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
                            spending time with my wife Andrea and boston terrier Gilbert.  I am a huge foodie that enjoys cooking as well as
                            finding excellent restaurants and love pairing foods with unique wines!
                        </p>
                    </div>
                    
                </div>

            </div>
           
    )
}

export default About;