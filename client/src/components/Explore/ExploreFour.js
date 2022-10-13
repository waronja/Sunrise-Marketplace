import React, { Component } from 'react';

const initData = {
    pre_heading: "Explore",
    heading: "Available Items",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    btnText: "Load More"
}

const data = [
    {
        id: "1",
        img: "/img/auction_1.jpg",
        title: "Wheel-barrow",
        owner: "KInuthia",
        price: "Ksh 5,000",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "2",
        img: "/img/auction_2.jpg",
        title: "Sufuria",
        owner: "Mama Ntilie",
        price: "Ksh 500",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "3",
        img: "/img/auction_3.jpg",
        title: "Bar set",
        owner: "Abraham",
        price: "Ksh 15,000",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "4",
        img: "/img/auction_4.jpg",
        title: "Tandoori oven",
        owner: "Charles",
        price: "Ksh 6,000",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "5",
        img: "/img/auction_5.jpg",
        title: "Frying pan",
        owner: "Ahmed",
        price: "Ksh 250",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "6",
        img: "/img/auction_6.jpg",
        title: "Chips Displayer",
        owner: "Mama Shiro",
        price: "Ksh 7,000",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "7",
        img: "/img/auction_7.jpg",
        title: "Meat Mincer",
        owner: "Kinyanjui",
        price: "Ksh 3,000",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "8",
        img: "/img/auction_8.jpg",
        title: "Cooker",
        owner: "Mhindi",
        price: "Ksh 30,999",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "9",
        img: "/img/auction_9.jpg",
        title: "Chips Cutter",
        owner: "Sara",
        price: "Ksh 6,000",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "10",
        img: "/img/auction_10.jpg",
        title: "General Displayer",
        owner: "Kinuthia",
        price: "Ksh 80,000",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "11",
        img: "/img/auction_11.jpg",
        title: "Trimmer",
        owner: "Giddy",
        price: "Ksh 10,000",
        count: "1 of 1",
        btnText: "View Details"
    },
    {
        id: "12",
        img: "/img/auction_12.jpg",
        title: "Mkokoteni",
        owner: "Victor",
        price: "Ksh 2,500",
        count: "1 of 1",
        btnText: "View Details"
    }
]

class ExploreFour extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="explore-area load-more">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                <p>{this.state.initData.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`exf_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href="/item-details">
                                                    <h5 className="mb-0">{item.title}</h5>
                                                </a>
                                                <div className="seller d-flex align-items-center my-3">
                                                    <span>Owned By</span>
                                                    <a href="/author">
                                                        <h6 className="ml-2 mb-0">{item.owner}</h6>
                                                    </a>
                                                </div>
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>{item.price}</span>
                                                    <span>{item.count}</span>
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
                            <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">{this.state.initData.btnText}</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExploreFour;