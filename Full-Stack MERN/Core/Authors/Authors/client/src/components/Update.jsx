import React,  { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);
    const [ resId, setResId ] = useState({})
    const { id } = useParams()
    const Nav = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/author/${id}`)
            .then((res) => {
                console.log(res.data)
                setName(res.data.Author.name)
                setResId(res.data.Author._id)
            })
            .catch(err => {
            console.log(err)
        })
    }, [id])

    const updateAuthor = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:5000/api/author/edit/${id}`, {name})
            .then(res => {
                console.log(res)
                Nav("/")
            })
            .catch(err => {
                console.log(err)
                setErrors([{ message: err.response.data.errors.name.message }])
            })
    }
    
    return (
        <div className='container' style={{ width: 400 }}>
            <Link to={'/'} ><h3>Home</h3></Link>
            {id === resId ? (
                <div>
                <p className='lead'>Edit this author:</p>
                <form className='d-flex flex-column form-control p-3 shadow' onSubmit={updateAuthor}>
                <label className='form-group mt-3'>Name:</label>
                <input name='name' value={name} onChange={(e) => setName(e.target.value)} className='form-control mt-1' ></input>
                {errors && Object.keys(errors).map((key) => (
                    <p key={key} className='text-danger'>{errors[key].message}</p>
                ))}
                <div className='d-flex justify-content-center flex-row gap-5 m-3'>
                    <Link to={"/"} ><button className='btn btn-secondary'>Cancel</button></Link>
                    <button className='btn btn-primary ms-2'>Submit</button>
                </div>
                </form>
                </div>
            ) : (
            <div>
                <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
                <Link to={'/api/author/new'}><button className='btn btn-primary'>Add Author</button></Link>
            </div>
            )
            }
        </div>
    );
}

export default Update;
