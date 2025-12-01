import React from 'react'
import Card from './Card'

const Cards = ({props}) => {
  return (
    <div>
      <card data ={props[0]}/>
      <card data ={props[1]}/>
      <card data ={props[2]}/>
      
    </div>
  )
}

export default Cards