import React from "react";
import useNotes from "../hooks/useNotes";
import Note from "./Note";

const Notes = () => {
  const {notes, setNotes} = useNotes()
  return (
    <div className="my-10 w-[full] flex flex-wrap justify-center items-center">
      {notes.map((note) => <Note key={note.id} id={note.id} title={note.title} desc={note.desc}/>)}
    </div>
  );
};

export default Notes;
