import React from "react";
import "./Portfolio.css";
import SectionCard from "../SectionCard/SectionCard";
import GridItem from "../GridItem/GridItem";
import portfolio from "./portfolio.json"

function Portfolio() {
    return (
        <SectionCard cardHeading={"Portfolio."} cardClass={"section-card portfolio"}
            headingClass={"text-right"} section={"portfolio"}>
            {portfolio.map(item => (
                <GridItem projectDemo={item.demo} projectImg={item.img}
                    key={item.title}
                    projectDescription={item.description} projectTitle={item.title}
                    projectRepo={item.repo} />
            ))}
        </SectionCard>
    )
}

export default Portfolio;