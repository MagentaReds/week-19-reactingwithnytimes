import React, {Component} from "react";

const MoreInfoModal = (props) => {
  return  (
    <div className="modal fade" id="moreInfoModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h2 className="modal-title text-center">Scott's Tots (The Office)</h2>
          </div>
          <div className="modal-body">
            <img className="img-responsive center-block" src="https://media.giphy.com/media/uCxR4xD2XDfhK/giphy.gif" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfoModal;