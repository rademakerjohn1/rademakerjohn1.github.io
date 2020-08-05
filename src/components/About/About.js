import React from "react";
import SectionCard from "../SectionCard/SectionCard";
import "./About.css"

function About() {
    return (
        <SectionCard cardHeading={"About Me."} cardClass={"section-card"} section={"about"}>
            <div className="headshot-container">
                <img src="headshot-2020.png" alt="headshot" />
            </div>
            <p>
                Hello and welcome to my portfolio. I am a full-stack web developer
                with a background in graphic design and a passion for making things work.
                In 2014, I graduated from the University of Dayton with a Bachelor's Degree
                in Electronic Media. That same year, I became a graphic designer for
                The Post Newspapers, a weekly newspaper providing localized content to residents
                of Medina and Cuyahoga County. Working in this position, I discovered
                my passion for producing functional and visually appealing design. I even won some awards
                for my designs along the way. Eventually, I decided to apply my passion and skill to the
                ever-expanding world of full-stack web development. Take a look at my portfolio to get an
                idea of what I can do.  Thanks for visiting!
            </p>


        </SectionCard>
    )
}
export default About;