import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import DeleteBtn from "../components/DeleteBtn";

const ProductUpdate = () => {

    const Nav = useNavigate()
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState("");
    const [updatedProduct, setUpdatedProduct] = useState({})
    const [ loaded, setLoaded ] = useState(false);
    const { id } = useParams();
    // const nav = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then((res) => {
                console.log(res.data);
                setUpdatedProduct(res.data.Product)
                setLoaded(true)
                // setTitle(res.data.Product.title);
                // setPrice(res.data.Product.price);
                // setDescription(res.data.Product.description);
            })
            .catch((err) => console.log(err));
    }, [id,setUpdatedProduct]);

    const updateProduct = (productParam) => {
        // e.preventDefault();
        axios.patch("http://localhost:8000/api/product/edit/" + id, productParam)
        //     {
        //     title,
        //     price,
        //     description
        // })
        .then(res => {
                console.log(res);
                // nav("/")
            })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className="p-2 text-center">Edit Product</h1>
            {
                loaded && <ProductForm onSubmitProp={updateProduct} initialTitle={updatedProduct.title} initialPrice={updatedProduct.price} initialDescription={updatedProduct.description} />
            }
        {/* <div className='container p-5' style={{ width: 500 }}> */}
            {/* <form className='d-flex flex-column form-control p-4 shadow' onSubmit={updateProduct}>
                <h1 className="fw-bold text-info text-center">Edit Product</h1>
                <label className='form-group mt-3'>Title:</label>
                <input className='form-control mt-1' type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name='title' />
                <label className='form-group mt-3'>Price:</label>
                <input className='form-control mt-1' type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} name='price'/>
                <label className='form-group mt-3'>Description:</label>
                <textarea className='form-control mt-1' value={description} onChange={(e) => { setDescription(e.target.value) }} name='description'></textarea>
                <button className='btn btn-success m-5' type='submit'>Confirm</button>
            </form> */}
            <div className="d-flex p-5 justify-content-center"><DeleteBtn removedProductId={updatedProduct._id} successCallback={() => Nav("/")} /></div>
        </div>
    )
};

export default ProductUpdate;
