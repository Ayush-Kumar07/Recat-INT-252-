import React, { useState } from 'react'
import MyContext from './MyContext'
import Form from './Form'

const App = () => {
function handleAdd(newData){
    // let [data,setData]= useState([])
    // setData()
    console.log(newData)
}
// let handleAdd = () => {

// }

// function handleDelete(){

// }
  

  return (
    <>  
    <MyContext.Provider value={{ handleAdd }}>
      <Form />
    </MyContext.Provider>
    </>
  )
}

export default App
// import axios from 'axios'

// const App = () => {
  
//   let [ inputName , setInputName ] = useState()
//   let [ email , setEmail] = useState()
//   let [ inputNum , setInputNum] = useState()
//   let [ pass , setPass] = useState()
//   let [fetchData , setfetchData] = useState([])

//   useEffect( ()=>{
//     axios.get('xyz')
//     .then( (res)=> setfetchData( (old) => [...old , ...res.data] ) )
//   } , [])

//   let onSubmit = (e)=>{
//     e.preventDefault()
//     // if(!inputName ){
//     //   alert("error in input field")
//     // }else if( !inputNum || inputNum.length != 10 ){
//     //   alert(" enter 10 digit number")
//     // }
//     let data = {
//       name : inputName,
//       email : email,
//       number : inputNum,
//       password : pass
//     }
//     axios.post('xyz', data)

//     }
  
//   return (
//     <div>
//       <form onSubmit={(e)=> onSubmit(e)} className='m-3 p-3 bg-amber-700 text-white' action="">
//         <input required value={inputName} type="text" onChange={(e)=>{setInputName(e.target.value)}} placeholder='enter your name' />
        
//         <input required value={email} type="email" onChange={(e)=> {setEmail(e.target.value)}} placeholder='enter your email' />
//         <input required value={inputNum} type="phone" onChange={(e)=>{setInputNum(e.target.value)}} placeholder='enter your number' />
//         <input required value={pass} type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder='enter your password' />
//         <input type="submit"  />
//       </form>
//       <div>
//         {fetchData.map( (item)=>
//           <div key={item.id} className='m-3 p-3 border-2 border-black'>
//             <h1>Name : {item.name} </h1>
//             <h1>Email : {item.email} </h1>
//             <h1>Number : {item.number} </h1>
//             <h1>Password : {item.password} </h1>
//           </div>
//         )
//         }
//       </div>
      
//     </div>
//   )
// // }

// export default App