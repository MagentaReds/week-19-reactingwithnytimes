import React, {Component} from "react";

const SuccessModal = (props) => {

  return  (
    <div className="modal fade" id="displayModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h2 className="modal-title text-center"><span className="title">{props.title}</span></h2>
          </div>
          <div className="modal-body">
            <h4 className="text-center body">{props.body}</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;