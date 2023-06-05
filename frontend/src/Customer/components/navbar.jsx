import { useState, useEffect, useContext } from "react";
import "./navbar.css";
import { CartContext } from '../screen/cartContext';

const Navbar = () => {
    const { getItems } = useContext(CartContext);
    const [isClicked, setIsClicked] = useState(false);
    const token = localStorage.getItem('token');
    const item = getItems();
    const itemCount = item.length;

    const handleClick = () => {
        setIsClicked(true);
        localStorage.removeItem('token')
        alert('Logged Out')
    };

    return (
        <div data-testid="navbar" className="container-fluid position-relative nav-bar p-0">


            <div className="container-lg position-relative p-0 px-lg-3">
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <a href="/home" className="nav-item nav-link active">
                                Home
                            </a>
                            <a href="/home" className="nav-item nav-link">
                                Restaurants
                            </a>
                            <a href="/GSitems" className="nav-item nav-link">
                                Store
                            </a>
                        </div>
                        <a
                            href="/home"
                            className="navbar-brand mx-5 d-none d-lg-block"
                        >
                            {/* <h1 className="m-0 display-4 text-primary">FOODIE</h1> */}
                            <h1 className="m-0 display-4 text-primary">
                                {/* <span class="text-secondary">S</span> */}
                                Store
                                <span className="text-secondary">2</span>
                                Door
                            </h1>
                        </a>
                        <div className="navbar-nav mr-auto py-0">

                            <a href="https://www.google.com/maps/place/FAST+National+University+of+Computer+and+Emerging+Sciences,+Islamabad+Campus/@33.6565377,73.0131881,17z/data=!3m1!4b1!4m5!3m4!1s0x38dfbe1faaaaaaab:0x223386a2985e88f4!8m2!3d33.6565377!4d73.0153768" className="nav-item nav-link">
                                Track
                            </a>

                            <a href="/cart" className="nav-item nav-link" >
                                Cart
                            </a>
                            <a className="cart-icon-container" >
                                <i className="fas fa-shopping-cart"></i>
                                {itemCount > 0 && <span className="notification-dot">{itemCount}</span>}
                            </a>
                            {
                                token !== null ?

                                    <a onClick={handleClick} className="nav-item nav-link">
                                        Logout
                                    </a>
                                    :
                                    <a href="/login" className="nav-item nav-link">
                                        Login
                                    </a>
                            }

                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;
