import React from 'react';


function Project(){
    const projects = [
        {
            name: "Colossal Closer",
            description: "Group project developed in a two week sprint using the React, MongoDB and GraphQl",
            image: "colossal-closer.jpg",
            contribution: "React components and hooks, CSS design, charts and graphs",
            technologies: "MongoDB, GraphQl, React, Node JS Victory Charts",
            github: "https://github.com/NGDino/colossal-closer/blob/master/README.md",
            deployed: "https://colossal-closer.herokuapp.com/"
        },
        {
            name: 'SAFR',
            description: "CMS-style blog site where users can publish posts, reviews, and safety measures offered by various businesses during COVID-19. Mobile friendly website that allows the users to get up-to-date information regarding dining, entertainment, and the outdoors.",
            image: "safr.jpg",
            contribution: "Project manager, Controller Routes, Javascript for rating calculations, some front end help",
            technologies: "MySQL, Sequelize, Express JS, Handlebars",
            github: "https://github.com/NGDino/safety-first",
            deployed: "https://ssafr.herokuapp.com/"
        },
        {
            name: 'The Craver',
            description: "A group front end project using two different 3rd party API's to give a user recipes and nearby restaurants based on the food they are craving and their location.",
            image: "craver.jpg",
            contribution: "Styling of landing page, apppended recipes to page, and Pair coded the recipe fetch.",
            technologies: "REST-Api's, Materialize, Javascript, CSS, HTML",
            github: "https://github.com/NGDino/fun-challenge-project",
            deployed: "https://ngdino.github.io/fun-challenge-project/"
        },
        {
            name: 'Real Estate Listing',
            description: "A mobile first landing page for Real Estate listings accessed by a QR code. Made for a friend when I noticed no homes have flyers during Covid-19.",
            image: "beegum.jpg",
            contribution: "Sole contributor.",
            technologies: "Javascript, CSS, HTML.",
            github: "https://github.com/NGDino/228beegum",
            deployed: "https://ngdino.github.io/228beegum/"
        },
        {
            name: "Mack 'N The Box ",
            description: "Responsive business website comissioned for a DJ. Uses soundcload API and has capabilities for a webstore",
            image: "coming-soon.jpg",
            contribution: "Sole contributor.",
            technologies: "Javascript, CSS, HTML.",
            github: "https://github.com/NGDino/mack-n-box",
            deployed: "https://macknthebox.com/"
        },
        {
            name: "Web Store",
            description: "A webstore using the MERN Stack",
            image: "coming-soon.jpg",
            contribution: "Sole contributor.",
            technologies: "MongoDB, Express JS, React, Node JS.",
            github: "https://github.com/NGDino/",
            deployed: "https://comingsoon.com/"
        },
        
    ];
    // const name = projects.name
    
    return(
        <div className="flex-row container">
        {projects.map(project =>{
            return(
                <div className="card margin " id="flip-card" style={{width: "18rem"}}>
                    <div id="card-inner" className="border">
                        <div id="card-front" >
                            <img src={require(`../../assets/images/project-photos/${project.image}`)} alt="screenshot of project" className="padding border"/>

                            <div className="card-body">
                                <h4 className="card-title">{project.name}</h4>
                                <p className="card-text">{project.description}</p>
                                
                            </div>
                        </div>
                        <div id="card-back" >
                            <div>
                            <p><strong>Technologies</strong></p>
                            <p >{project.technologies}</p>
                            <p><strong>Contribution</strong></p>
                            <p >{project.contribution}</p>
                            <p> <a href={project.github} target="_blank" ><strong>Github </strong></a> </p>
                            <a href={project.deployed} target="_blank" className="align-middle"><strong>Deployed App</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
        
        
    
}

export default Project;