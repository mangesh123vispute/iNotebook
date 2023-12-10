import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);
  const host = "http://localhost:5000";

  // getnotes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3MTRiNmY0OTZkYTdlNmNjYmNjNzUxIn0sImlhdCI6MTcwMTkyMzY5NX0.ESX__rNvDMbmNT332jiKF_LqQFMUVFWeWHWX4-YK1n0",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //add note
  const addNote = async (title, description, tag) => {
    const host = "http://localhost:5000";
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3MTRiNmY0OTZkYTdlNmNjYmNjNzUxIn0sImlhdCI6MTcwMTkyMzY5NX0.ESX__rNvDMbmNT332jiKF_LqQFMUVFWeWHWX4-YK1n0",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    console.log("adding the notes ", note);
    setNotes(notes.concat(note));
  };
  const deleteNote = async (id) => {
    const host = "http://localhost:5000";
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3MTRiNmY0OTZkYTdlNmNjYmNjNzUxIn0sImlhdCI6MTcwMTkyMzY5NX0.ESX__rNvDMbmNT332jiKF_LqQFMUVFWeWHWX4-YK1n0",
      },
    });
    const json = await response.json();
    console.log(json);
    console.log("deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  const editNote = async (id, title, description, tag) => {
    const host = "http://localhost:5000";
    console.log(title);
    console.log(description);
    console.log(tag);
    const data = {
      title: title,
      description: description,
      tag: tag,
    };

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3MTRiNmY0OTZkYTdlNmNjYmNjNzUxIn0sImlhdCI6MTcwMTkyMzY5NX0.ESX__rNvDMbmNT332jiKF_LqQFMUVFWeWHWX4-YK1n0",
      },

      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
