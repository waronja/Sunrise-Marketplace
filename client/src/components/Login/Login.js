import React, { useState } from 'react';
import ServerSideErrors from '../Create/ServerSideErrors';
import { useHistory } from 'react-router-dom'; 
function Login () {
    let history = useHistory ();
    const[currentUser, setCurrentUser] = useState('')
    const[isAuthenticated, setIsAuthenticated] = useState(false)
    const [isServerSideError, setIsServerSideError] = useState(false)
    const [error, setError] = useState([])
    const[formData, setFormData] = useState({
        username:'',
        password:'',
    })

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((res) =>{
            if(res.ok){
                res.json().then((user)=>{
                    setCurrentUser(user)
                    setIsAuthenticated(true)
                })
            }else{
                res.json().then((errors)=>{
                    setError(errors)
                    setIsServerSideError(true)
                })
            }
        })
        history.push('/create')
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
                                            <input type="email" className="form-control" 
                                            name="username" 
                                            value={formData.username} 
                                            onChange={(e) => handleChange(e)} 
                                            placeholder="Enter your username" 
                                            required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="password" className="form-control" 
                                            name="password" value={formData.password} 
                                            onChange={(e) => handleChange(e)} 
                                            placeholder="Enter your Password" required="required" />
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