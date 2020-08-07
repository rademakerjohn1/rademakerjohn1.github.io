import React from 'react';
import './ToggleButton.css'

function ToggleButton(props) {
    return (
        <button id="toggle-button" onClick={props.onClick}>
            {!props.bool ? "Click to view graphic design portfolio" : "Click to view web development portfolio"}
        </button>
    )
}

export default ToggleButton
