import React from "react";
import "./topbar.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faTwitter, faInstagram);

const topbar = () => {
    return (
        <div data-testid="topbar" className="container-fluid position-relative nav-bar p-0">
            <div className="container-fluid bg-primary py-3 d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white pr-3" href="/RLoginPage">Rider</a>
                                <span className="text-white">|</span>
                                <a className="text-white px-3" href="/Login">Resturant Manager</a>
                                <span className="text-white">|</span>
                                <a className="text-white pl-3" href="/GSLogin">Store Manager</a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white px-3" href="">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a className="text-white px-3" href="">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a className="text-white px-3" href="">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a className="text-white px-3" href="">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a className="text-white pl-3 user" href="/profile">
                                    <FontAwesomeIcon icon={faUser} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default topbar;
