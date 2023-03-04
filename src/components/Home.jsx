import React from 'react'
import Notes from './Notes'
import Textarea from './Textarea'

const Home = () => {
  return (
    <div className='mt-10 text-white flex justify-center items-center flex-col'>
      <Textarea />
      <Notes />
    </div>
  )
}

export default Home
