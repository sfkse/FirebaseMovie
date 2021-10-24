import React, { useState } from "react";
import { createUser } from '../auth/firebase';
import { useHistory } from "react-router-dom";

const Register = ({ handleGoogleRegister }) => {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {

        const user = { firstName, lastName, email, password };
        const displayName = `${firstName} ${lastName}`;
        createUser(user.email, user.password, displayName, history);

    }


    return (
        <div className="register">
            <div className="form-image">
                <img src={"https://picsum.photos/1200/900"} alt="sample-movie" />
            </div>
            <div className="register-form">
                <h1 className="form-title display-3">Register</h1>
                <form id="register">
                    <div className="mb-3">
                        <label htmlFor="first-name" className="form-label display-4">First Name</label>
                        <input type="text" className="form-control" id="first-name" placeholder="Enter your first name..." onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="last-name" className="form-label display-4">Last Name</label>
                        <input type="text" className="form-control" id="last-name" placeholder="Enter your last name..." onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label display-4">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email address..." onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label display-4">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password..." onChange={e => setPassword(e.target.value)} />
                    </div>
                    <input type="button" className="btn btn-primary form-control" value="Register" onClick={handleRegister} />
                </form>
                <button className="btn btn-primary form-control" onClick={() => handleGoogleRegister(history)}>Continue with Google</button>
            </div>
        </div>
    );
};

export default Register;