import React,{useEffect, useState} from 'react';
import { Spinner } from '../Explore/spinner/Spinner';

const initData = {
    pre_heading: "New Products",
    heading: "New Products",
    btnText: "View All"
}

const data = [
    {
        id: "1",
        img: "/img/auction_1.jpg",
        date: "2021-12-09",
        title: "Wheel-barrow",
        seller_thumb: "/img/avatar_1.jpg",
        seller: "@Kinuthia",
        price: "Ksh 5,000",
        count: "1 of 1"
    },
    {
        id: "2",
        img: "/img/auction_2.jpg",
        date: "2021-10-05",
        title: "Sufuria",
        seller_thumb: "/img/avatar_2.jpg",
        seller: "@Mama Ntilie",
        price: "Ksh 500",
        count: "1 of 1"
    },
    {
        id: "3",
        img: "/img/auction_3.jpg",
        date: "2021-09-15",
        title: "Bar set",
        seller_thumb: "/img/avatar_3.jpg",
        seller: "@Kinyanjui",
        price: "Ksh 15,000",
        count: "1 of 1"
    },
    {
        id: "4",
        img: "/img/auction_4.jpg",
        date: "2021-12-29",
        title: "Tandoori oven",
        seller_thumb: "/img/avatar_4.jpg",
        seller: "@Charles",
        price: "Ksh 7,000",
        count: "1 of 1"
    },
    {
        id: "5",
        img: "/img/auction_5.jpg",
        date: "2022-01-24",
        title: "Frying pan",
        seller_thumb: "/img/avatar_5.jpg",
        seller: "@Mama Shiro",
        price: "Ksh 250",
        count: "1 of 1"
    },
    {
        id: "6",
        img: "/img/auction_6.jpg",
        date: "2022-03-30",
        title: "Chips Displayer",
        seller_thumb: "/img/avatar_6.jpg",
        seller: "@Giddy",
        price: "Ksh 7,000",
        count: "1 of 1"
    }
]

const AuctionsOne =()=> {
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
    
        return (
            <section className="live-auctions-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>Latest Products</span>
                                    {/* <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3> */}
                                </div>
                                {/* <div className="intro-btn">
                                    <a className="btn content-btn" href="/auctions">{this.state.initData.btnText}</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="auctions-slides">
                        <div className="swiper-container slider-mid items">
                            <div className="swiper-wrapper">
                                {/* Single Slide */}
                                {products.map((product) => {
                                    return (
                                        <div key={product.id} className="swiper-slide item">
                                            
                                            <div className="card">
                                                <div className="image-over">
                                                    <a href="/item-details">
                                                       <img className="card-img-top" src={product.image} alt="" /> 
                                                    </a>
                                                </div>
                                                {/* Card Caption */}
                                                <div className="card-caption col-12 p-0">
                                                    {/* Card Body */}
                                                    <div className="card-body">
                                                        <a href="/item-details">
                                                            <h5 className="mb-0">{product.name}</h5>
                                                        </a>
                                                        <a className="seller d-flex align-items-center my-3" href="/item-details">
                                                            <img className="avatar-sm rounded-circle" src={product.seller_thumb} alt="" />
                                                            <span className="ml-2">{product.seller}</span>
                                                        </a>
                                                        <div className="card-bottom d-flex justify-content-between">
                                                            <span>kshs.{product.price}</span>
                                                            <span>instock {product.instock}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default AuctionsOne;