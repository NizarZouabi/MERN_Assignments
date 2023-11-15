import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmation: "",
  });
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmation };
        setFormData(newUser);
        
        setFirstname("");
        setLastname("");
    	setEmail("");
        setPassword("");
        setConfirmation("");
    };
    
    return (
        <div className='bg-light p-5 border rounded-2 shadow mt-5 d-flex justify-content-center'>
        <form className='mt-3' onSubmit={ createUser }>
            <div>
                <label className='form-label'>Firstname: </label> 
                <input className='mb-2 form-control' type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label className='form-label'>Lastname: </label> 
                <input className='mb-2 form-control' type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label className='form-label'>Email Address: </label> 
                <input className='mb-2 form-control' type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label className='form-label'>Password: </label>
                <input className='mb-2 form-control' type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label className='form-label'>Confirm Password: </label>
                <input className='mb-2 form-control' type="password" value={confirmation} onChange={ (e) => setConfirmation(e.target.value) } />
            </div>
            <input className='mt-3 mb-3 btn btn-primary' type="submit" value="Create User" />
            </form>
            <div className='m-3 ms-5'>
                <h2 className='fw-bolder text-success'>Form Data</h2>
                <p className='d-flex flex-start fw-bold'>Firstname: {formData.firstname} { firstname }</p>
                <p className='d-flex flex-start fw-bold'>Lastname: {formData.lastname} { lastname }</p>
                <p className='d-flex flex-start fw-bold'>Email: {formData.email} { email }</p>
                <p className='d-flex flex-start fw-bold'>Password: {formData.password} { password }</p>
                <p className='d-flex flex-start fw-bold'>Password Confirmation: {formData.confirmation} { confirmation }</p>
            </div>
            </div>
    );
};
    
export default UserForm;
