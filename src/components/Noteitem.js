import React from "react";

function Noteitem(props) {
  const { note } = props;
  return (
    <div className="col-md-3  ms-3 my-3 card">
      <div className="card-body">
        <div className="d-flex ">
          <h5 className="card-title p-2 flex-grow-1 ">Card title</h5>
          <i className="fa-solid fa-pen-to-square p-2"></i>
          <i className="fa-solid fa-trash  p-2"></i>
        </div>
        <div className="container">
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {note.title}
          </h6>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
