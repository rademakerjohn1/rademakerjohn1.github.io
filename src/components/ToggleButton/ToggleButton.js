import React from 'react';
import './ToggleButton.css'

function ToggleButton(props) {
    return (
        <button id="toggle-button" onClick={props.onClick}>
            {props.showGraphics ? "View Web Development Portfolio" : "View Graphic Design Portfolio"}
        </button>
    )
}

export default ToggleButton
