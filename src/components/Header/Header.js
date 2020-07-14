import React from "react";
import "./Header.css"

function Header() {
    return(
        <div className="jumbotron jumbotron-fluid header" id="jumbotron">
            <div className="container col">
                <h1 className="display-4">John Rademaker</h1>
                <h2 className="lead">Web Development Portfolio</h2>
            </div>
        </div>
    )
}

export default Header;