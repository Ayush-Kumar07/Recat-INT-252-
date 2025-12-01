import React, { useContext ,useRef} from 'react'
import MyContext from './MyContext'

const FormOutput = () => {
    let {handleDelete,data}=useContext(MyContext)
  return (
    <>
      {data.map((value, index) => (
        <div key={index} className="bg-white p-5 border">
          <div className='bg-amber-400 text-white text-3xl p-3 flex justify-evenly items-center'>
            
            <span>{index + 1}</span>
            <span>{value.name}</span>
            <span>{value.RegNo}</span>
            <span>{value.Cgpa}</span>

            <button 
              onClick={() => handleDelete(index)} 
              className="bg-red-500 p-2 rounded"
            >
              Delete
            </button>

          </div>
        </div>
      ))}
    </>
  )
}

export default FormOutput