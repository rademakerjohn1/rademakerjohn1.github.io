import React from "react";
import "./Modal.css";

function Modal(props) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>{props.title}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div id="modal-img-container">
                            <img id="modal-img" src={props.image} alt="graphic" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;