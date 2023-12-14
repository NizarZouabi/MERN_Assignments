import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

const AuthorForm = (props) => {
    const { authors, setAuthors } = props
    const [errors, setErrors] = useState([])
    const [author, setAuthor] = useState({
        name:''
    })
    const Nav = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/author/new", {name: author.name} )
            .then(res => {
                console.log(res.data)
                setAuthors([...authors, res.data])
                Nav('/')
            })
            .catch((err) => {
                console.log(err)
                setErrors([{ message: err.response.data.errors.name.message }])
                })
    }

    return (
        <div className='container' style={{ width: 400 }}>
            <Link to={'/'} ><h3>Home</h3></Link>
            <p className='lead'>Add a new author:</p>
            <form className='d-flex flex-column form-control p-3 shadow' onSubmit={submitHandler}>
                <label className='form-group mt-3'>Name:</label>
                <input name="name" value={author.name} onChange={(e) => setAuthor({ ...author, name: e.target.value })} className='form-control mt-1' ></input>
                {errors && Object.keys(errors).map((key) => (
                    <p key={key} className='text-danger'>{errors[key].message}</p>
                ))}
                <div className='d-flex justify-content-center flex-row gap-5 m-3'>
                    <Link to={"/"} ><button className='btn btn-secondary'>Cancel</button></Link>
                    <button className='btn btn-primary ms-2'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AuthorForm;
