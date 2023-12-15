import React from 'react';
import axios from 'axios';

const DeleteBtn = (props) => {
    const { playerId, successCallback, playerName } = props
    
    const removePlayer = (e) => {
        axios.delete(`http://localhost:8000/api/players/removeplayer/${playerId}`)
            .then(res => {
                console.log(res)
                successCallback()
            })
        .catch((err) => console.log(err))
    }

    const confirmDelete = () => {
        const Confirmation = window.confirm(`Are you sure you want to remove ${playerName}?`);
        if (Confirmation) {
            removePlayer()
        }
    }


    return (
        <div>
            <button className='btn btn-danger' onClick={confirmDelete}>Delete</button>
        </div>
    );
}

export default DeleteBtn;
