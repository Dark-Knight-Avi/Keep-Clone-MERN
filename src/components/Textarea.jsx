import React, { useCallback, useState } from "react";
import useNotes from "../hooks/useNotes";
const Textarea = () => {
  const { notes, setNotes } = useNotes();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleClick = () => {
    title !== "" &&
      desc !== "" &&
      setNotes([
        ...notes,
        { id: Math.floor(Math.random() * 90000), title, desc },
      ]);
  };
  const onTitleChange =(e) => {
    setTitle(e.target.value)
    console.log("inside TitleChange")
  }
  const onDescChange = (e) => {
    setDesc(e.target.value)
    console.log("Inside DescChange")
  }
  return (
    <div className="w-full flex flex-col justify-center items-center px-20">
      <input
        type="text"
        onChange={onTitleChange}
        placeholder="Title"
        className="inline-flex items-center bg-gray-800 py-3 px-5 focus:outline-none hover:bg-gray-700 text-base w-full"
      />
      <textarea
        onChange={onDescChange}
        placeholder="Description"
        className="inline-flex items-center bg-gray-800 border-0 py-3 px-5 focus:outline-none hover:bg-gray-700 text-base w-full h-40"
        name="desc"
        id="desc"
      ></textarea>
      <button
        onClick={handleClick}
        className="mt-5 items-center active:bg-slate-800 bg-gray-800 border-0 w-full py-3 px-5 focus:outline-none hover:bg-gray-700 rounded text-base"
      >
        Add Note
      </button>
    </div>
  );
};

export default Textarea;
