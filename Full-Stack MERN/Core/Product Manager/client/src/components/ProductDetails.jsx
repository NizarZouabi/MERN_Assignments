import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const [oneProduct, setOneProduct] = useState({})
    const { id } = useParams()
    const nav = useNavigate()

    const removeProduct = (removedProductId) => {
        axios.delete(`http://localhost:8000/api/product/remove/${removedProductId}`)
            .then(res => {
                console.log(res.data)
                nav("/")
            })
            .catch((err) => console.log(err))
    }

    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                console.log(res.data.Product)
                setOneProduct(res.data.Product)
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div className='m-5 p-5 text-center'>
            <h1 className='text-secondary lead display-6'>Product:</h1>
            <h3>{oneProduct.title}</h3>
            <p className='fw-bold m-1'>Price: <span className='text-success'>{oneProduct.price}$</span></p>
            <p className='fw-bold'>Description: <span className='small'>{oneProduct.description}</span></p>
            <button className='btn btn-danger' onClick={() => removeProduct(oneProduct._id)}>Delete</button>
        </div>
    );
}

export default ProductDetails;