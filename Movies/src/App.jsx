import { useState } from 'react'
import './App.css'
import Movies from './Components/Movies'
function App() {


  return (
    <div className='flex flex-col w-[95vw] h-[100vh] bg-slate-200 items-center gap-20 mx-auto'>
      <h1 className='text-5xl text-fuchsia-700 border-black border-[3px] p-2'>Movies Gallery</h1>
      <Movies></Movies>
    </div>
  )
}

export default App;
