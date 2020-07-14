import React from "react";
import "./ContactIcon.css";

function ContactIcon(props) {
    return(
    <a href={props.href} target="blank" className="col-4">
        <i className={props.class}></i>
    </a>
    )
}

export default ContactIcon;