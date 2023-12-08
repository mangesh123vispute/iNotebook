import React from "react";

function Noteitem(props) {
  const { note } = props;
  return (
    <div className="col-md-3  ms-3 my-3 card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{note.title}</h6>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
  );
}

export default Noteitem;
