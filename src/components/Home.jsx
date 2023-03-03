import React, { useState } from 'react'
import Notes from './Notes'
import Textarea from './Textarea'

const Home = () => {
  const [notes, setNotes] = useState([])
  return (
    <div className='mt-10 text-white flex justify-center items-center flex-col'>
      <Textarea notes={notes} setNotes={setNotes}/>
      <Notes notes={notes} setNotes={setNotes}/>
    </div>
  )
}

export default Home
