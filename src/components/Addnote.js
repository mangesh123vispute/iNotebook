import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext, useState } from "react";

function Addnote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;
  const date = new Date();

  const [notes, setNotes] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const onChange = (e) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    notes.title = document.getElementById("title").value;
    notes.description = document.getElementById("description").value;
    notes.tag = document.getElementById("tag").value;
    e.preventDefault();
    addNote(notes.title, notes.description, notes.tag);
    setNotes({ title: "", description: "", tag: "" });
    props.showAlert("Added successfully", "success");
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
            value={notes.title}
            minLength={5}
            required
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
            value={notes.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            value={notes.tag}
            name="tag"
            minLength={5}
            required
            onChange={onChange}
          />
        </div>

        <button
          type="submit"
          onClick={handleClick}
          disabled={
            notes.tag.length < 5 ||
            notes.title.length < 5 ||
            notes.description.length < 5
          }
          className="btn btn-primary"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default Addnote;
