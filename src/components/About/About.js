import React from "react";
import SectionCard from "../SectionCard/SectionCard";
import "./About.css"

function About() {
    return (
        <SectionCard cardHeading={"About Me."} cardClass={"section-card"} section={"about"}>
            <p className="col-md-8 col-sm">
            Hello and welcome to my portfolio. I am a full-stack web developer 
            with a background in graphic design and a passion for making things work.  
            In 2014, I graduated from the University of Dayton with a Bachelor's Degree 
            in Electronic Media. In the same year, I became a graphic designer for 
            The Post Newspapers, a weekly newspaper providing localized content to residents 
            of Medina and Cuyahoga County. Working in this position, I discovered
            my passion for producing functional and appealing design, and even won some awards 
            for it along the way. Eventually, I decided to apply my passion and skill to the 
            ever-expanding world of web development. That's what led me (and you) here - my portfolio.
            </p>
            <div className="headshot-container col-md-3 col-sm">
                <img src={require("./headshot.png")} alt="headshot" />
            </div>

        </SectionCard>
    )
}
export default About;