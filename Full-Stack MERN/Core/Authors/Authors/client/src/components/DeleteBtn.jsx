import React from 'react';
import axios from 'axios'

const DeleteBtn = (props) => {

    const { authorId, successCallback } = props

    const removeAuthor = (e) => {
        axios.delete(`http://localhost:5000/api/author/remove/${authorId}`)
            .then(res => {
                console.log(res)
                successCallback()
            })
        .catch((err) => console.log(err))
    }


    return (
        <div>
            <button className='btn btn-danger' onClick={removeAuthor}>Delete</button>
        </div>
    );
}

export default DeleteBtn;
