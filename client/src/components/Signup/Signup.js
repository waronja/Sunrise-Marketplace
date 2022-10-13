import React, { useState } from 'react';

    function Signup () {
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("");
        const [passwordConfirmation, setPasswordConfirmation] = useState("");
        
        function handleSubmit(e) {
            e.preventDefault();
            fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
      }),
    }).then((res) => res.json()).then((data) => console.log(data))
  }
        
        
        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-center">
                            <div className="intro text-center">
                                <h5>Sign Up</h5>
                            <form className="item-form card no-hover" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="name" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail (e.target.value)} placeholder="Enter your Email" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="password" className="form-control" name="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="password" className="form-control" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}placeholder="Confirm Password" required="required" />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                                <label className="form-check-label" htmlFor="inlineRadio1">I agree to <a href="#">Privacy Policy</a></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4" type="submit">Sign Up</button>
                                    </div>
                                    <div className="col-12">
                                        <span className="d-block text-center mt-4">Already have an account? <a href="/login">Login</a></span>
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


export default Signup;