import React, { useState } from 'react'

const Todo = () => {
    
    let [input,setInput]=useState()
    function handleInput(){
        console.log(input)
    }
  return (
    <div>
      <div className='p-5 text-center space-x-7 bg-teal-700'>
        <input className='border p-3 text-4xl'  onChange={(e)=>{setInput(e.target.value)}}  type="text" />
    <button onClick={handleInput} className='text-white p-6 text-3xl border rounded bg-blue-900'>Add ToDo</button>
         </div>
         <div className='p-4 text-4xl bg-amber-300 text-white flex justify-evenly '> {input} <button className='border p-3 bg-red-800'>Delete ToDo</button>  </div>
    </div>
  )
}

export default Todo