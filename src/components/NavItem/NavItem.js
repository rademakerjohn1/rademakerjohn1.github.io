import React from "react";
import "./NavItem.css";

function NavItem(props) {
    return (
        <li className="nav-item" key={props.section}>
            <a href={`#${props.section}`} className="nav-link">
                <i className={props.iconClass}></i>
            </a>
        </li>
    )
}
export default NavItem;