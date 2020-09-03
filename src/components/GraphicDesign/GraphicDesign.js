import React from "react";
import "./GraphicDesign.css";


function GraphicDesign(props) {
    return (
        <div onClick={props.onClick} className="portfolio-card card" > 
            {props.hover &&
                <div className="description">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="project-links">
                    <button>Click to view</button>
                </div>
                </div>}
            <img alt={props.title} src={require(`${props.img}`)} width="100%" data-toggle="modal" data-target="#exampleModal" className="card-img-top img-responsive" />
        </div>
    )
}
export default GraphicDesign;
