import React, {useContext,useRef } from 'react'
import MyContext from './MyContext'

const FormInput = () => {
  let {handleAdd} =  useContext(MyContext)
  let inputName = useRef()
  let inputRegno = useRef()
  let inputCgpa = useRef()

  function handleClick() {
    let newData = {
      name: inputName.current.value,
      RegNo: inputRegno.current.value,
      Cgpa: inputCgpa.current.value
    }

    handleAdd(newData)

    inputName.current.value = ""
    inputRegno.current.value = ""
    inputCgpa.current.value = ""
  }

  return (
    <div className='bg-black text-white text-3xl text-center p-4 space-x-8'>
      <input ref={inputName} className='p-3' type="text" placeholder='Enter Name'/>
      <input ref={inputRegno} className='p-3' type="text" placeholder='Enter Reg No'/>
      <input ref={inputCgpa} className='p-3' type="text" placeholder='Enter CGPA'/>
      
      <button 
        onClick={handleClick} 
        className='bg-slate-700 border rounded p-4'
      >
        Click to Add
      </button>
    </div>
  )
}

export default FormInput