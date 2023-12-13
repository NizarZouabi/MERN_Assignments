import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios'

const Main = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then((res) => {
                console.log(res.data.AllProducts)
                setProducts(res.data.AllProducts)
            })
        .catch((err) => console.log(err))
    }, [setProducts]) //useEffect issue temp solution $`products` || JSON.stringfy(products)

    const createProduct = (productParam) => {
        axios.post("http://localhost:8000/api/product", productParam)
            .then(res => {
                console.log("Done", res.data)
                const newProduct = res.data
                setProducts([...products, newProduct])
            })
            .catch(err => console.log("something went wrong.", err))
    };

    return (
        <div className='py-5'>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice={0} initialDescription="" />
            <ProductList products={products} setProducts={setProducts} />
        </div>
    );
}

export default Main;
