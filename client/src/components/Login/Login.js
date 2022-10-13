import React, { useState } from 'react';
import ServerSideErrors from '../Create/ServerSideErrors';

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isServerSideError, setIsServerSideError] = useState(false)
    const [error, setError] = useState([])

    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => res.json())
        .then((data)=>{
            if(data['status']==="failed"){
                setIsServerSideError(true)
                setError(data['data'])
            }else{
                setIsServerSideError(false)
                setError([])
            }
        })
    }

        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            <h5>Login</h5>
                            <form className="item-form card no-hover" onSubmit={handleSubmit}>
                                <div className="row">
                                {isServerSideError && <ServerSideErrors errors={error}/>}
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
                                        <button className="btn w-100 mt-3 mt-sm-4" type="submit">Sign In</button>
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