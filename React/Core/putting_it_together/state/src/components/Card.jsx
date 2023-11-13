import React, { useState } from 'react'

const Card = (props) => {
  const [age, setAge] = useState(props.currentAge)
  return (
    <div className="container mt-5 mb-5 p-5 bg-dark card shadow">
      <h2 className="text-white fw-bolder"> {props.name}</h2>
      <p className="text-white"><span className='fw-bold'>Age:</span> {age}</p>
      <p className="text-white"><span className='fw-bold'>Hair Color:</span> {props.color}</p>
      <button className="btn btn-primary m-3" onClick={(e) => setAge(age + 1)}>Add</button>
    </div>
  )
}

export default Card;

