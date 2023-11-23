import React from 'react';

const List = ({ taskList, setTaskList }) => {

    const deleteHandler = (e) => {
        const taskToRemove = e.target.name
        const filteredList = taskList.filter(task => {
            return task.task !== taskToRemove
        })
        setTaskList(filteredList)
    }
    const changeHandler = (e) => {
        const taskName = e.target.name
        const isChecked = e.target.checked
        const checked = taskList.map(task => {
            if (task.task === taskName) {
                return {...task, checkbox: isChecked}
            }
            return task
        })
        setTaskList(checked)
    }

    return (
        <div>
            <div>
                {
                    taskList.map((task) => {
                        return (
                            <div key={task} className='container mt-3 form-control' style={{ width: '475px' }}>
                                <div className='d-flex justify-content-center flex-row pb-2'>
                                    <label className='fw-bold' style={{ textDecoration: task.checkbox ? 'line-through' : 'none' }}>{task.task}</label><input className='ms-2' type="checkbox" onChange={changeHandler} name={task.task} />
                                </div>
                                <button className='btn btn-danger' name={task.task} style={{}} onClick={deleteHandler}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default List;
