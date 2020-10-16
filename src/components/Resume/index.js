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
                <h3>Education</h3>
                <h4><strong>UC Berkeley</strong></h4>
                <span><b>Full Stack Web Development Bootcamp</b></span>
                <p><strong>Front end Technologies:</strong> React, CSS, HTML, Bootstrap, Materialize</p>
                <p><strong>Back end Technologies:</strong> MongoDB, MySQL, NodeJS, Express JS</p>


            </div>

        </div>
    )
}

export default Resume;