import React from "react";
import useNotes from "../hooks/useNotes";

const Note = ({ id, title, desc }) => {
  const {notes, setNotes} = useNotes()
  const onClickDelete = () => {
    let newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="w-[300px] min-h-[200px] rounded flex flex-col justify-center overflow-clip items-center border-2 mx-4 my-4 border-gray-600 shadow-lg bg-slate-900 pb-4">
      <div className="px-6 py-4 flex flex-col">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">{desc}</div>
      </div>
      <div className="flex w-full justify-around items-center">
        <button
          onClick={onClickDelete}
          className="rounded-lg bg-gray-800 px-5 py-2"
        >
          Delete
        </button>
        {/* <button className="rounded-lg bg-gray-800 px-5 py-2">Edit</button> */}
      </div>
    </div>
  );
};

export default Note;
