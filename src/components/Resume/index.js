import React from 'react';
import resume from '../../assets/resume/developer-resume.pdf';

function Resume(){
    return(
        <div className="paper container">
            <div className="border">
                <h2>Resume</h2> 
                <h3><a href={resume} download>Download</a></h3>
            </div>
            <div className="margin border">
                <h3>Technical Skills</h3>
                <ul className="skills flex-left">
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQUERY</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>ReactJS</li>
                    <li>Handlebars</li>
                    <li>Rest API's</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>No SQL</li>
                    <li>Express JS</li>
                    <li>NodeJS</li>
                    <li>MVC Design Pattern</li>
                    <li>Test Driven Development</li>
                    <li>Scrum</li>
                    <li>GIT</li>
                    <li>GraphQL</li>
                    <li>Object Oriented Programming</li>
                </ul>
                <h3>Additional Skills</h3>
                <ul>
                    <li>2 Years Wordpress Management</li>
                    <li>3 Years Digital Marketing</li>
                    <li>3 Years Social Media Management</li>
                    <li>7+ Years Professional Sales </li>
                    <li>3 Years Management</li>
                    
                </ul>
                <h3>Education</h3>
                <h4><strong>UC Berkeley</strong></h4>
                <span><strong>Certificate in Full-Stack Web Development</strong></span>
                <p> Completed October 2020 with a 97%  </p>
                <h4><strong>Las Positas College</strong></h4>
                <span><b>Associates in Business Administration</b></span>
                <p> Completed June 2020 with a 3.8 GPA  </p>


            </div>

        </div>
    )
}

export default Resume;