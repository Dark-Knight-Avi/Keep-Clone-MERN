import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-10 bg-slate-900 min-h-[100vh]'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
