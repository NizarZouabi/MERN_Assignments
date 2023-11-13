import React from 'react'

const Card = (props) => {
  return (
    <div className = "container mt-5 mb-5 p-5 bg-dark card shadow">
          <h2 className="text-white fw-bolder"> {props.name}</h2>
          <p className ="text-white"><span className='fw-bold'>Age:</span> {props.age}</p>
          <p className ="text-white"><span className='fw-bold'>Hair Color:</span> {props.color}</p>
    </div>
  )
}

export default Card;

