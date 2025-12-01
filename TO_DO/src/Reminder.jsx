import React, { useRef, useState } from 'react'

const Reminder = () => {
    
    let inputData=useRef()
    let [data,setData]=useState()
    function handleClick(){
            setData([inputData.current.value,...data])
    }
  return (
    <div>
      <input type="text" className='border' ref={inputData} />
      <button onclick={handleClick}>Click to Add</button>
    </div>
    // <div>
        
    // </div>
  )
}

export default Reminder