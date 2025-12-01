import React from 'react'
import Navbar from './component/Navbar'
import Cards from './component/Cards'


const App = () => {
  const data3={
    url:"https://happenings.lpu.in/wp-content/uploads/2023/08/LPU-Chancellor-and-modi-ji.jpg",
    title:"Card Heading",
    desc:"Card Description"
  }
  var data2=["Ram ", "Shyam ", "Mohan "]
  let data5=[{
        URL : "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.4bbddf98eccea9929192db1494ba3678.1.jpg",
        Title : "Pizza HUT" ,
        DESc : "Farmhouse Pizzaaaaaa"  

  }]

  let data=[{

        const cards =({props})=>{

        }
  }]

  // JS CODE BEFORE RETURN
  return (
    // HTML CODE INSIDE RETUR
    <>
    <div>
    <Navbar />
   <Cards />
   <div>
    <p>Hello Students</p>
    <p>{data2[1]}</p>
    <img src={data5[0].URL}></img>
    <p>{data3.title}</p>
   </div>
    </div>

    

</>
  )
}
-

export default App