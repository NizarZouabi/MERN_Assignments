import React, {useState} from 'react';
import axios from 'axios'

const ProductForm = (props) => {
    const { products, setProducts } = props
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/product", {product})
            .then(res => {
                console.log("Done", res.data)
                const newProduct = res.data
                setProducts([...products, newProduct])
                setProduct({
                title: '',
                price: 0,
                description: ''
                })
            })
        .catch(err => console.log("something went wrong.", err))
    }

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }

    return (
        <div className='container' style={{width: 450}}>
            <form className='d-flex flex-column form-control p-4 shadow' onSubmit={submitHandler}>
                <h1 className="fw-bold text-primary text-center">Product Manager</h1>
                <label className='form-group mt-3'>Title:</label>
                <input className='form-control mt-1' type="text" value={product.title} onChange={changeHandler} name='title' />
                <label className='form-group mt-3'>Price:</label>
                <input className='form-control mt-1' type="number" value={product.price} onChange={changeHandler} name='price'/>
                <label className='form-group mt-3'>Description:</label>
                <textarea className='form-control mt-1' value={product.description} onChange={changeHandler} name='description'></textarea>
                <button className='btn btn-success m-5' type='submit'>Add Product</button>
            </form>
        </div>
    );
}

export default ProductForm;
