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

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
