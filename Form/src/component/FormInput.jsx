import React, { useContext, useState } from 'react'
import MyContext from './MyContext'

const Forminput = () => {


let [name,setName]=useState()
let [email,setEmail]=useState()
let [password,setPassword]=useState()

let handleClick = (e) =>{


   e.preventDefault()
    let newData={
        Name:name,
        Email:email,
        Password:password
    }
    handleAdd(newData)
   }
  return (
    // <div>FormInput</div>
    <form action="" onSubmit={(e)=>{handleClick(e)}}>
        <input type="text" onChange={(e)=>{'setName(e.target'/>
        <input type="email" placeholder='Enter email' />
        <input type="password" placeholder='Enter password' />
        <button onClick={handleClick}>Submit</button>
    </form>
  )
}

export default Forminput