import React from "react";
import "./GridItem.css";

function GridItem(props) {
    return (
        <div style={{transform: `${props.hover ? 'scale(1.05)' : 'scale(1)'}`}}
        className="portfolio-card card" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            {props.hover &&
            <div className="description">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <hr />
                <p>{props.tools}</p>
                <div className="project-links">
                <a target="blank" href={props.repo}>Repository</a>
                <a target="blank" href={props.demo}>Deployed</a>
                </div>

            </div>
            }
            <img alt="" src={require(`${props.img}`)} width="100%" className="card-img-top img-responsive" />
        </div>
    )
}
export default GridItem;
