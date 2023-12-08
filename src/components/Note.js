import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

function Note() {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row ">
      <h1>Your notes:</h1>
      {notes.map((note) => {
        return <Noteitem note={note} />;
      })}
    </div>
  );
}

export default Note;
