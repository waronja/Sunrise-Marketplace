import React, { useState } from 'react';

function Login (onLogin) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((data) => console.log(data));
            }
        });
    }

        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            <h5>Login</h5>
                            <form className="item-form card no-hover" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" defaultChecked />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Remember Me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <a className="btn w-100 mt-3 mt-sm-4" type='submit' href="/create">LogIn</a>
                                    </div>
                                    <div className="col-12">
                                        <hr />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

export default Login;