import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn } from "../auth/firebase";


const Login = ({ handleGoogleRegister }) => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault()
        signIn(email, password, history)

    }

    return (
        <div className="register">
            <div className="form-image">
                <img src={"https://picsum.photos/1200/900"} alt="sample-movie" />
            </div>
            <div className="register-form">
                <h1 className="form-title display-3">Login</h1>
                <form id="login">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label display-4">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email address..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label display-4">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password..."
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="link">
                            Forgot password?
                        </div>
                    </div>
                    <input
                        type="button"
                        className="btn btn-primary form-control"
                        value="Login"
                        onClick={handleLogin}

                    />
                </form>
                <button
                    className="btn btn-primary form-control"
                    onClick={() => handleGoogleRegister(history)}
                >
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;