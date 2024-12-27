
import {useState} from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BiSolidQuoteRight } from "react-icons/bi";
import { FaChevronRight,FaChevronLeft  } from "react-icons/fa";
import { toast } from 'react-toastify';

function Testimonial({data}){
    const [idx,setIdx]=useState(0);
    console.log(data);

    function surprise(){
        toast("Suprise!!");
        let len=data.length;
        const num=Math.floor(Math.random()*len);
        {console.log(num);
        }
        setIdx(num);
        }
    
        function leftHandler(){
            if(idx===0){
                setIdx(data.length-1);
            }
            else{
                setIdx(idx-1);
            }
        }

        function rightHandler(){
            if(idx===data.length-1){
                setIdx(0);
            }
            else{
                setIdx(idx+1);
            }
        }
    

    return(
        <div className='flex flex-col py-8 px-4 relative justify-center items-center gap-4 rounded-md bg-white mt-6 w-[80vw] max-w-[750px]'>
            <div className='absolute h-[120px] w-[120px] bg-violet-500 rounded-[50%] left-[20px] top-[-50px]'></div>
            <img src={data[idx].picture_url} alt=""  className='absolute h-[120px] w-[120px] bg-violet-500 rounded-[50%] left-[12px] top-[-50px]'/>
            <h2 className='font-semibold text-xl' >{data[idx].name}</h2>
            <FaQuoteLeft color='rgb(139 92 246)' className='mt-2'/>
            <p className='text-gray-600'>{data[idx].testimonial}</p>
            <FaQuoteRight color='rgb(139 92 246)' />
            <div className='flex justify-between mt-3'>
            <FaChevronLeft color='rgb(139 92 246)' size='25px' onClick={leftHandler}/>
            <FaChevronRight color='rgb(139 92 246)' size='25px' onClick={rightHandler} /> 
            </div>
            <button className='bg-violet-400 p-2 rounded-md font-bold text-white' onClick={surprise}>Surprise Me</button>
           


        </div>
    );
}

export default Testimonial;