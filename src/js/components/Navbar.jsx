import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid mx-4">
                <a className="navbar-brand" href="https://www.olympics.com/es/olympic-games ">
                    <img src="https://www.olympics.com/images/static/b2p-images/logo_color.svg" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end ">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-item " aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-item" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-item" href="#">Services</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-item" href="#">Contact</a>
                        </li>
                    </ul>
                </div>

            </div >
        </nav >
    );
};

export default Navbar;
