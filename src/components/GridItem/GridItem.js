import React from "react";
import "./GridItem.css";

function GridItem(props) {
    return (
        <div className="portfolio-card card col-sm-6 col-lg-4">
            {!props.bool ?
                <div className="card-body">
                    <a href={props.projectDemo} target="blank" className="btn-primary"><img alt="" src={require(`${props.projectImg}`)} width="100%" className="card-img-top img-responsive" /></a>
                    <div className='card-footer'>
                        <h4 className="card-title">{props.projectTitle + " "}</h4>
                        <p>{props.projectDescription} <a href={props.projectRepo} target="blank"> Repository</a></p>
                    </div>
                </div> :
                <div className="card-body">
                    <img alt="" src={require(`${props.projectImg}`)} width="100%" data-toggle="modal" data-target="#exampleModal" onClick={props.handleModal} className="card-img-top img-responsive" />
                    <div className='card-footer'>
                        <h4 className="card-title">{props.projectTitle + " "}</h4>
                        <p>{props.projectDescription}</p>
                    </div>
                </div>
            }
        </div>
    )
}
export default GridItem;
