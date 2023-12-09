import React, { useState } from 'react';
import axios from 'axios'

const ProductForm = (props) => {
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState(0)
    const [ description, setDescription ] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        const object = {
            title,
            price,
            description
        }
        axios.post("http://localhost:8000/api/product/add", object)
            .then(res => {
                console.log("Done", res.data)
            })
        .catch(err => console.log("Data wasn't submitted", err))
    }

    return (
        <div className='container mt-5' style={{width: 500}}>
            <form className='d-flex flex-column form-control p-4 shadow' onSubmit={submitHandler}>
                <h1 className="fw-bold text-primary text-center">Product Manager</h1>
                <label className='form-group'>Title:</label>
                <input className='form-control' type="text" value={title} onChange={e => setTitle(e.target.value)} name='title'/>
                <label className='form-group'>Price:</label>
                <input className='form-control' type="number" value={price} onChange={e => setPrice(e.target.value)} name='price'/>
                <label className='form-group'>Description:</label>
                <input className='form-control' type="text" value={description} onChange={e => setDescription(e.target.value)} name='description' />
                <button className='btn btn-success m-5' type='submit'>Add Product</button>
            </form>
        </div>
    );
}

export default ProductForm;
