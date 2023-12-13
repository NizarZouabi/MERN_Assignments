import React, { useState } from 'react';
// import axios from 'axios'

const ProductForm = (props) => {
    const { onSubmitProp, initialTitle, initialPrice, initialDescription } = props
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)
    // const { products, setProducts } = props
    // const [product, setProduct] = useState({
    //     title: '',
    //     price: 0,
    //     description: ''
    // })
    
    const submitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({title, price, description})
        // axios.post("http://localhost:8000/api/product", product)
        //     .then(res => {
        //         console.log("Done", res.data)
        //         const newProduct = res.data
        //         setProducts([...products, newProduct])
        // setProduct({
        //     title: '',
        //     price: 0,
        //     description: ''
        // })
    // }
            // })
    //     .catch(err => console.log("something went wrong.", err))
    }

    // const changeHandler = (e) => {
    //     setProduct({...product, [e.target.name]:e.target.value})
    // }

    return (
        <div className='container' style={{width: 450}}>
            <form className='d-flex flex-column form-control p-4 shadow' onSubmit={submitHandler}>
                <h1 className="fw-bold text-primary text-center">Product Manager</h1>
                <label className='form-group mt-3'>Title:</label>
                <input className='form-control mt-1' type="text" value={title} onChange={(e) => setTitle(e.target.value)} name='title' />
                <label className='form-group mt-3'>Price:</label>
                <input className='form-control mt-1' type="number" value={price} onChange={(e) => setPrice(e.target.value)} name='price'/>
                <label className='form-group mt-3'>Description:</label>
                <textarea className='form-control mt-1' value={description} onChange={(e) => setDescription(e.target.value)} name='description'></textarea>
                <button className='btn btn-success m-5' type='submit'>Add Product</button>
            </form>
        </div>
    );
}
    
export default ProductForm;
