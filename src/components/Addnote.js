import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext, useState } from "react";

function Addnote() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [notes, setNotes] = useState({
    title: "",
    description: "",
    tag: "Default",
  });

  const onChange = (e) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
    console.log(notes);
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(notes);
    addNote(notes.title, notes.description, notes.tag);
    setNotes({ title: "", description: "", tag: "Default" });
  };
  return (
    <div className="container my-3">
      <h1>Add your notes:</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>

        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default Addnote;
