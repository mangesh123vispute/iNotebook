import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {
  const { note, updateNote, notes } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const formatDateWithTime = (dateString) => {
    // Check if the provided dateString is invalid
    if (
      !dateString ||
      !/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(dateString)
    ) {
      throw new Error("Invalid date string provided");
    }

    // Create a new Date object from the string
    const dateObject = new Date(dateString);

    // Extract the day, month, year, hour, minute, and period
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear().toString().substring(2);
    const hour = dateObject.getHours().toString().padStart(2, "0");
    const minute = dateObject.getMinutes().toString().padStart(2, "0");
    const period = dateObject.getHours() >= 12 ? "PM" : "AM";

    // Format the date string
    return `${day}-${month}-${year}(${hour}:${minute} ${period})`;
  };

  return (
    <>
      <div
        className="card border-success mb-3 "
        style={{ maxWidth: "18rem", margin: "10px" }}
      >
        <div
          className="card-header bg-transparent border-success"
          style={{ padding: "5px" }}
        >
          <div>{note.tag}</div>
        </div>

        <div className="d-flex ">
          <h5 className="card-title p-2 flex-grow-1 " style={{ margin: "5px" }}>
            {note.title}
          </h5>
          <i
            className="fa-solid fa-pen-to-square p-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
          <i
            className="fa-solid fa-trash  p-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
        </div>
        <div className="card-body text-success">
          <p className="card-text">{note.description}</p>
        </div>
        <div className="card-footer bg-transparent border-success">
          <small className="text-muted">
            Created at: {formatDateWithTime(note.date)}
          </small>
          <div className="text-muted">
            <small>Deadline:</small>
          </div>
        </div>
      </div>

      {/* <div className="col-md-3  ms-3 my-3 card">
        <div className="card-body">
          <div className="d-flex ">
            <h5 className="card-title p-2 flex-grow-1 ">{note.tag}</h5>
            <i
              className="fa-solid fa-pen-to-square p-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <i
              className="fa-solid fa-trash  p-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
          </div>
          <div className="container">
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {note.title}
            </h6>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Noteitem;
