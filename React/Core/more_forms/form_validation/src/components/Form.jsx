import React, { useState } from "react";

const UserForm = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const createUser = (e) => {
    e.preventDefault();

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmation("");

    setSubmitted(true);
  };

  const formMessage = () => submitted ? "Thank you for submitting the form!" : "Welcome, please submit the form";

  return (
    <div className="bg-light p-5 border rounded-2 shadow mt-5 d-flex justify-content-center">
      <form className="mt-3" onSubmit={createUser}>
        <h2 className="fw-bolder mb-4 text-info">Form Validation</h2>
        <p className="lead">{formMessage()}</p>
        <div>
          <label className="form-label">Firstname: </label>
          <input
            className="mb-2 form-control"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          {firstname.length < 3 && firstname.length !== 0 ? <p className="small text-danger">Firstname must be 3 or more letters.</p> : null}
        </div>
        <div>
          <label className="form-label">Lastname: </label>
          <input
            className="mb-2 form-control"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          {lastname.length < 3 && lastname.length !== 0 ? <p className="small text-danger">Lastname must be 3 or more letters.</p> : null}
        </div>
        <div>
          <label className="form-label">Email Address: </label>
          <input
            className="mb-2 form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email.length < 12 && email.length !== 0 ? <p className="small text-danger">Email pattern is not valid.</p> : null}
        </div>
        <div>
          <label className="form-label">Password: </label>
          <input
            className="mb-2 form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && password.length !== 0 ? <p className="small text-danger">Not a valid Password.</p> : null}
        </div>
        <div>
          <label className="form-label">Confirm Password: </label>
          <input
            className="mb-2 form-control"
            type="password"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
          />
          {confirmation !== password ? <p className="small text-danger">Password Confirmation doesn't match.</p> : null}
        </div>
        <input
          className="mt-3 mb-3 btn btn-primary"
          type="submit"
          value="Create User"
        />
      </form>
    </div>
  );
};

export default UserForm;
