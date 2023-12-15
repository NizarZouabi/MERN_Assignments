import React from 'react';
import axios from 'axios';

const DeleteBtn = (props) => {
    const { playerId, successCallback } = props
    
    const removePlayer = (e) => {
        axios.delete(`http://localhost:8000/api/players/removeplayer/${playerId}`)
            .then(res => {
                console.log(res)
                successCallback()
            })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <button className='btn btn-danger' onClick={removePlayer}>Delete</button>
        </div>
    );
}

export default DeleteBtn;
