import React from 'react';
import axios from 'axios'

const DeleteBtn = (props) => {
    const { removedProductId, successCallback } = props
    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/product/remove/${removedProductId}`)
            .then(res => {
                console.log(res.data)
                successCallback()
            })
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <button className='btn btn-danger' onClick={deleteProduct}>Delete</button>
        </div>
    );
}

export default DeleteBtn;
