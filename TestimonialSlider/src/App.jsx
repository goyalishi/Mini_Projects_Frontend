import { useState ,useEffect} from 'react'
import { toast } from 'react-toastify';
import './App.css'
import {data} from './data.jsx'
import Testimonial from './Components/Testimonial.jsx'
function App() {
  
 
    
  
  return (
    <div className='bg-gray-300  h-screen flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center min-h-[400px] '>
        <h1 className='font-bold text-3xl'>Our Testimonials</h1>
        <span className='h-[4px] w-[150px] bg-violet-400 my-2' ></span>
        <Testimonial data={data}/>
      </div>
      
    </div>
    
     
      
   
  )
}

export default App
