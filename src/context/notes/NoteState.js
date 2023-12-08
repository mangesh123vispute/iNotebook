import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "657295ad38b489eb933d9a6e",
      user: "65714b6f496da7e6ccbcc751",
      title: "My title 3",
      description: "please mpv ",
      tag: "general2",
      date: "2023-12-08T04:03:57.297Z",
      __v: 0,
    },
    {
      _id: "657295c738b489eb933d9a70",
      user: "65714b6f496da7e6ccbcc751",
      title: "My title 4",
      description: "i am mangesh vispute ",
      tag: "general2",
      date: "2023-12-08T04:04:23.400Z",
      __v: 0,
    },
    {
      _id: "657295c738b489eb933d9a70",
      user: "65714b6f496da7e6ccbcc751",
      title: "My title 4",
      description: "i am mangesh vispute ",
      tag: "general2",
      date: "2023-12-08T04:04:23.400Z",
      __v: 0,
    },
    {
      _id: "657295c738b489eb933d9a70",
      user: "65714b6f496da7e6ccbcc751",
      title: "My title 4",
      description: "i am mangesh vispute ",
      tag: "general2",
      date: "2023-12-08T04:04:23.400Z",
      __v: 0,
    },
    {
      _id: "657295c738b489eb933d9a70",
      user: "65714b6f496da7e6ccbcc751",
      title: "My title 4",
      description: "i am mangesh vispute ",
      tag: "general2",
      date: "2023-12-08T04:04:23.400Z",
      __v: 0,
    },
    {
      _id: "657295c738b489eb933d9a70",
      user: "65714b6f496da7e6ccbcc751",
      title: "My title 4",
      description: "i am mangesh vispute ",
      tag: "general2",
      date: "2023-12-08T04:04:23.400Z",
      __v: 0,
    },
    {
      _id: "657295c738b489eb933d9a70",
      user: "65714b6f496da7e6ccbcc751",
      title: "My title 4",
      description: "i am mangesh vispute ",
      tag: "general2",
      date: "2023-12-08T04:04:23.400Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes);

  //add note
  const addNote = (title, description, tag) => {
    console.log("adding a new note");
    console.log(title, description, tag);
    const note = {
      _id: "657295c738b489eb933d9a70",
      user: "65714b6f496da7e6ccbcc751",
      title: title,
      description: description,
      tag: tag,
      date: "2023-12-08T04:04:23.400Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  const deleteNote = (id) => {
    console.log("deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  const editNote = (id, title, description, tag) => {
    console.log("editing the note with id" + id);
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
