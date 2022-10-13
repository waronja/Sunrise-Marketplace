import React, { useState } from 'react';
import ServerSideErrors from '../Create/ServerSideErrors';
import { useHistory } from 'react-router-dom'; 

    function Signup () {
        let history = useHistory ();
        const[isServerSideError, setIsServerSideError] = useState(false)
        const[error, setError] = useState([])
        const[formData, setFormData] = useState({
            username:'',
            password:'',
            password_confirmation:''
        })

        const handleSubmit =(e)=>{
            e.preventDefault();
            createAccount(formData)
            console.log(formData);
        }

        const handleChange =(e)=>{
            setFormData({...formData, [e.target.name]:e.target.value})
        }

        const createAccount = (data)=>{
            fetch('http://localhost:3000/users',{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then((response)=>response.json())
            .then((data)=>{
                if(data['status']==="failed"){
                    setIsServerSideError(true)
                    setError(data['data'])
                    history.push('/login')
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
                            <div className="intro text-center">
                                <h5>Sign Up</h5>
                            <form className="item-form card no-hover" onSubmit={handleSubmit}>
                                <div className="row">
                                {isServerSideError && <ServerSideErrors errors={error}/>}
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control"
                                             name="username" 
                                             autoComplete="off" 
                                             value={formData.username} 
                                             onChange={(e)=>handleChange(e)} 
                                             placeholder="Enter your username" 
                                             required="required" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="password" className="form-control" 
                                            name="password" value={formData.password} 
                                            onChange={(e)=>handleChange(e)} 
                                            placeholder="Enter your Password"
                                             required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="password" className="form-control" name="password_confirmation" 
                                            value={formData.password_confirmation}
                                            onChange={(e)=>handleChange(e)} 
                                             placeholder="Confirm Password" 
                                             required="required" />
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