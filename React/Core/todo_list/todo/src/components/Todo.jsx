import React from 'react';
import { useState } from 'react';

const Todo = (props) => {
    const { taskList, setTaskList } = props
    const [task, setTask] = useState({
        task:''
    })

    const changeHandler = (e) => {
        setTask({...task, [e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()

        setTaskList([...taskList, task])
        setTask({
            task: ''
        })
    }

    return (
        <div className='container mt-5' style={{width:'500px'}}>
            <form className='form-control px-5 py-3' onSubmit={submitHandler} >
            <label className='form-label fw-bold display-6 text-primary' >To-do List</label>
            <input className='form-control' placeholder='Enter a Task' type='text' name='task' value={task.task} onChange={changeHandler}/>
            <button className='btn btn-success mt-4 px-5' type='submit'>Add</button>
            </form>
        </div>
    );
}

export default Todo;
