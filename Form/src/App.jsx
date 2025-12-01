import React, { use, useState } from 'react'
import Form from './component/Form'
import MyContext from './component/MyContext'

const App = () => {
  
  let [data,setData]=useState([])
  function handleAdd( e ){
  }
   function handleDelete( e ){
  }
  return (
    <div>
      <MyContext.Provider value={{handleAdd, handleDelete, data}}>
        <Form />
      </MyContext.Provider>
      
    </div>
  )
}

export default App