import React,{useEffect, useState} from 'react';
import { Spinner } from './spinner/Spinner';
import Products from './products/Products';


const ExploreOne =()=> {
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(false)

    const fetchProducts = () =>{
        fetch('http://localhost:3000/items')
        .then((response)=>response.json())
        .then((data)=>{
            setLoading(true)
            setProducts(data)
        })
    }
    
    useEffect(()=>{
        fetchProducts()
    },[])
    
    const productList = products.map((product)=>(
        <Products 
        key={product.id}
        product={product}
        />
    ))
    
        return (
            <section className="explore-area load-more p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>Products</span>
                                    {/* <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div> */}
                                <div className="intro-btn">
                                    {/* <a className="btn content-btn" href="/explore-3">{this.state.initData.btn_1}</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {products.map((item) => {
                            return (
                                <div key={item.id} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={item.image} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href="/item-details">
                                                    <h5 className="mb-0">{item.name}</h5>
                                                </a>
                                                <div className="seller d-flex align-items-center my-3">
                                                    <span>Owned By</span>
                                                    <a href="/author">
                                                        <h6 className="ml-2 mb-0">{item.user}</h6>
                                                    </a>
                                                </div>
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>ksh.{item.price}</span>
                                                    <span>instock {item.instock}</span>
                                                </div>
                                                <a className="btn btn-bordered-white btn-smaller mt-3" href="/login"><i className="icon-handbag mr-2" />{item.btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">{this.state.initData.btn_2}</a> */}
                        </div>
                    </div>
                </div>
                </div>
            </section>
        );
}

export default ExploreOne;