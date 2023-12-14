import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteBtn from './DeleteBtn';


const Dashboard = (props) => {
    const { authors, setAuthors } = props
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/author")
            .then(res => {
                console.log(res.data.AllAuthors)
                setAuthors(res.data.AllAuthors)
            })
        .catch(err => console.log(err))
    }, [setAuthors])
    
    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }


    return (
        <div className='container'>
            <Link to={'/api/author/new'} ><h3>Add an author</h3></Link>
            <p className='lead'>We have quotes by:</p>
            <table className='border table table-striped shadow'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.length > 0 ? authors.slice().sort((a, b) => a.name < b.name ? -1 : 1).map((author, id) => (
                    <tr key={id}>
                        <td>{author.name}</td>
                            <td>
                                <div className='d-flex flex-row gap-2 justify-content-center'>
                                    <Link to={`/api/author/edit/${author._id}`} ><button className='btn btn-success'>Edit</button></Link>
                                    <DeleteBtn authorId={author._id} successCallback={() => removeFromDom(author._id)}/>
                                </div>
                        </td>
                    </tr>
                    )) : (<tr><td colSpan={2}> No Authors. </td></tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
