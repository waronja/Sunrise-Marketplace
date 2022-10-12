import React from 'react';

const Header = () => {
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-sticky" src="img/tp logo.png" alt="sticky brand-logo" />
                    </a>
                    <div className="ml-auto" />
                    
                    {/* Navbar Action Button */}
                    <ul className="navbar-nav action">
                        <li className="nav-item ml-3">
                            <a href="/login" className="btn ml-lg-auto btn-bordered-white"><i className="icon-wallet mr-md-2" />Login</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav action">
                        <li className="nav-item ml-3">
                            <a href="/signup" className="btn ml-lg-auto btn-bordered-white"><i className="icon-wallet mr-md-2" />Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;