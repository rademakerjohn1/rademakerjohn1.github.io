import React from "react";
import "./SectionCard.css"

function SectionCard(props) {
    return(
        <div className={`card ${ props.cardClass }`} id={props.section}>
            <div className="card-body">
            <h3 className={`card-title ${props.headingClass}`}>{props.cardHeading}</h3>
            {!props.link ? null : props.link}
            <div className={props.containerClass}>
                {props.children}
            </div>
        </div>
    </div>)
}

export default SectionCard;