import React from 'react'
import { useState } from 'react'

const BoxForm = (props) => {
    const { boxList, setBoxList } = props
    const [ box, setBox ] = useState({
        color:'',
        height:'',
        width:''
    })
    
    const changeHandler = (e) => {
        setBox({...box, [e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()

        setBoxList([...boxList, box])
        setBox({
            color: '',
            height: '',
            width:''
        })
    }

  return (
      <div className='container text-center mt-5 d-flex justify-content-center'>
          <form className='d-flex gap-2 flex-column p-4 border rounded border-1 shadow' onSubmit={submitHandler}>
              <label className='form-label fw-bold'>Color:</label>
              <input className='form-control' placeholder='Red' type="text" name="color" onChange={changeHandler} value={box.color} />
              <label className='form-label fw-bold'>Height:</label>
              <input className='form-control' placeholder='200' type="text" name="height" onChange={changeHandler} value={box.height} />
              <label className='form-label fw-bold'>Width:</label>
              <input className='form-control' placeholder='200' type="text" name="width" onChange={changeHandler} value={box.width} />
              <button className='m-4 btn btn-primary' type='submit'>Add</button>
          </form>
      </div>
  )}

export default BoxForm