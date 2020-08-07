import React from "react";
import "./Modal.css";

function Modal(props) {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>{props.title}</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="modal-img-container">
                            <img id="modal-img" src={props.image} />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;