import React, { useState } from 'react'

const Textarea = ({notes, setNotes}) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const handleClick = () => {
    setNotes([...notes, {id: Math.floor(Math.random() * 90000),title, desc}])
  }
  return (
    <div className='w-full flex flex-col justify-center items-center px-20'>
      <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='inline-flex items-center bg-gray-800 py-3 px-5 focus:outline-none hover:bg-gray-700 text-base w-full'/>
      <textarea onChange={(e) => setDesc(e.target.value)} placeholder='Description' className='inline-flex items-center bg-gray-800 border-0 py-3 px-5 focus:outline-none hover:bg-gray-700 text-base w-full h-40' name="desc"  id="desc"></textarea>
      <button onClick={title !== '' && desc !== '' && handleClick} className='mt-5 items-center active:bg-slate-800 bg-gray-800 border-0 w-full py-3 px-5 focus:outline-none hover:bg-gray-700 rounded text-base'>Add Note</button>
    </div>
  )
}

export default Textarea
