import React, { useState, useEffect } from 'react';
import AuthorProfile from "../AuthorProfile/AuthorProfile";
import ServerSideErrors from './ServerSideErrors';

const Create =()=>{
    const[isServerSideError, setIsServerSideError] = useState(false)
    const[error, setError] = useState([])
    const[formData, setFormData] = useState({
        name:'',
        category:'',
        description:'',
        image:'',
        price:'',
        instock:''
    })

    const handleSubmit =(e)=>{
        e.preventDefault()
        createItem(formData)
        console.log(formData);
      }

      const handleFormFields = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
      }

    const createItem = (data)=>{
        fetch('http://localhost:3000/items',{
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
            }else{
                setIsServerSideError(false)
                setError([])
            }
        })
    }

    
   
        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-4">
                            {/* Author Profile */}
                            <AuthorProfile />
                        </div>
                        <div className="col-12 col-md-7">
                            {/* Intro */}
                            <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
                                <div className="intro-content">
                                    <span>Get Started</span>
                                    <h3 className="mt-3 mb-0">Create Item</h3>
                                </div>
                            </div>
                            {/* Item Form */}
                            <form className="item-form card no-hover" onSubmit={handleSubmit} enctype="multipart/form-data" method="post" accept-charset="UTF-8" >
                                <div className="row">
                                
                                    {/* <div className="col-12">
                                        <div className="input-group form-group">
                                            <div className="custom-file">
                                                <input type="text" className="form-group" id="image" 
                                                name="image"
                                                value={formData.image}
                                                onChange={(e)=>handleFormFields(e)}
                                                />
                                                <label className="custom-file-label" htmlFor="image">image</label>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="name" placeholder="Item Name" required="required"
                                            value={formData.name}
                                            onChange={(e)=>handleFormFields(e)}
                                             />
                                           </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="category" placeholder="Item Category" required="required"
                                            value={formData.category}
                                            onChange={(e)=>handleFormFields(e)}
                                             />
                                           </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="image" placeholder="product image" required="required"
                                            value={formData.image}
                                            onChange={(e)=>handleFormFields(e)}
                                             />
                                           </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control" name="description" placeholder="Description" cols={30} rows={3} 
                                            value={formData.description}
                                            onChange={(e)=>handleFormFields(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="price" placeholder="Item Price" required="required" 
                                            value={formData.price}
                                            onChange={(e)=>handleFormFields(e)}
                                            />
                                        </div>
                                    </div>
                                   
                                   
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="number" className="form-control" name="instock" placeholder="No of Items" required="required"
                                            value={formData.instock}
                                            onChange={(e)=>handleFormFields(e)}
                                             />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4" type="submit">Add Item</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Create;