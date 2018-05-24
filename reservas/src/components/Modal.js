import React from 'react';

export default () => (
  <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <i className="material-icons">clear</i>
          </button>
        </div>
        <div className="modal-body">
          <p>Far far away, behind the word mountains</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-link">Nice Button</button>
          <button type="button" className="btn btn-danger btn-link" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
);
