import React from 'react'
import './App.css'
import Card from './components/card'
import Navbaar from './components/Navbaar'

const App = () => {
  return (
    <div>
      <div className='Card'>
      <h1>Hello My name is Ayush</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
      </p></div>

      hello you know my name is <Card/>
      <Navbaar/>

      
    </div>
  )
}

export default App
