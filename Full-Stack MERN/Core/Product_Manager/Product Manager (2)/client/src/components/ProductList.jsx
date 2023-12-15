import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const ProductList = (props) => {

    const { products, setProducts } = props
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then((res) => {
                console.log(res.data.All_Products)
                setProducts(res.data.All_Products)
            })
        .catch((err) => console.log(err))
    }, [setProducts])

    return (
        <div className='bg-white container border rounded shadow p-3 mt-5 d-flex gap-2 text-center flex-column' style={{width:450}}>
            <h1 className='text-danger mb-3'>Products List</h1>
            {
                products.length > 0 ? products.map((product, id) => (
                        <div key={id} className='p-2 border rounded'>
                            <Link to={`/api/product/${product._id}`} > <h3 className='fw-bolder'>{product.title}</h3> </Link>
                        </div>
                    )
                ) : ( <p className='lead'>No Products.</p> )
            }
        </div>
    );
}

export default ProductList;
