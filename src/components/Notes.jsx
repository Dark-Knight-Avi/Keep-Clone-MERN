import React from "react";
import Note from "./Note";

const Notes = ({ notes, setNotes }) => {
  return (
    <div className="my-10 w-[full] flex flex-wrap justify-center items-center">
      {notes.map((note) => <Note notes={notes} setNotes={setNotes} key={note.id} id={note.id} title={note.title} desc={note.desc}/>)}
    </div>
  );
};

export default Notes;
