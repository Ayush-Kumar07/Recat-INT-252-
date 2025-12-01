import React, { useRef, useState } from 'react'

const StudentForm = () => {
   let inputName=useRef()
    let inputRegno=useRef()
    let inputCgpa=useRef()
    let [data,setData]=useState([])
    function handleClick(){
    
    let newData={
        name:inputName.current.value,
        reg:inputRegno.current.value,
        cgpa:inputCgpa.current.value,
    }
    setData([newData,...data])
    inputName.current.value=" "
    inputRegno.current.value=" "
    inputCgpa.current.value=" "

    }
  return (
    <div>
      <input type="text" placeholder='Enter name' className='border ' ref={inputName}/>
      <input type="number" placeholder='Enter reg no' className='border ' ref={inputRegno}/>
      <input type="number" placeholder='Enter cgpa' className='border ' ref={inputCgpa}/>
      <button onClick={handleClick}>Submit</button>
      <div>
        {
        data.map((e)=>(
            <div>name:{e.name} , regno:{e.reg} , cgpa:{e.cgpa}</div>
        ))
  }
      </div>
    </div>
  )
}

export default StdRegForm