import React, { useState } from 'react';
import Card from './Card';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index,SetIndex] = useState(0);
  
    
    function LeftShiftHandler(){
      if(index -1 < 0)
      {
        SetIndex(reviews.length - 1)
      }
      else SetIndex(index-1);
    
    }
    function RightShiftHandler() {
        if(index+1 >= reviews.length)
        {
          SetIndex(0);
        }
        else SetIndex(index+1);
    }
    
    function SurpriseHandler(){
    
        let randindex = Math.floor(Math.random() * (reviews.length));
        SetIndex(randindex);
    
    }
  return (
    <div className='rounded-md w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 shadow-sm hover:shadow-lg'>
        <Card review = {reviews[index]}/>
        <div className='flex text-3xl mt-9 gap-3 text-violet-400 font-bold mx-auto'>
            <button
            onClick={LeftShiftHandler}
             className='hover:text-violet-500'><FiChevronLeft/></button>
            <button 
            onClick={RightShiftHandler}
            className='hover:text-violet-500'><FiChevronRight/></button>
        </div>
        <div>
            <button 
            onClick={SurpriseHandler}
            className=' mt-5 bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-sm font-bold text-white text-lg'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonial