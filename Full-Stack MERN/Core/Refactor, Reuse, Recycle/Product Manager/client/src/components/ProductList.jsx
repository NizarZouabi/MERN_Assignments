import React from 'react';
import { Link } from 'react-router-dom'
import DeleteBtn from './DeleteBtn';

const ProductList = (props) => {

    const { products, setProducts } = props

    // const [product, setProduct] = useState({
    //     title: '',
    //     price: 0,
    //     description: ''
    // })
    
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/product")
    //         .then((res) => {
    //             console.log(res.data.AllProducts)
    //             setProducts(res.data.AllProducts)
    //         })
    //     .catch((err) => console.log(err))
    // }, [setProducts]) //$`products` || JSON.stringfy(products)

    const removeFromDom = (removedProductId) => {
        setProducts(products.filter(product => product._id !== removedProductId))
    }

    // const deleteProduct = (removedProductId) => {
    //     axios.delete(`http://localhost:8000/api/product/remove/${removedProductId}`)
    //         .then(res => {
    //             console.log(res.data)
    //             removeFromDom(removedProductId)
    //         })
    //     .catch((err) => console.log(err))
    // }

    return (
        <div className='bg-white container border rounded shadow p-3 mt-5 d-flex gap-2 text-center flex-column' style={{width:450}}>
            <h1 className='text-danger mb-3'>Products List</h1>
            {
                products.length > 0 ? products.map((product, id) => (
                        <div key={id} className='p-2 border rounded'>
                        <Link to={`/api/product/${product._id}`} > <h3 className='fw-bolder'>{product.title}</h3> </Link>
                         <div className='d-flex gap-2 justify-content-center'>
                            <Link to={`/api/product/edit/${product._id}`}><button className='btn btn-secondary'>Edit</button></Link>
                            <DeleteBtn removedProductId={product._id} successCallback={() => removeFromDom(product._id)} />
                            {/* <button className='btn btn-danger' onClick={(e) => deleteProduct(product._id)}>Delete</button> */}
                         </div>
                        </div>
                    )
                ) : ( <p className='lead'>No Products Available.</p> )
            }
        </div>
    );
}

export default ProductList;
