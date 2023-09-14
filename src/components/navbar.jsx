import React from "react";
import { useContext } from "react";
import { ProfileContext } from "../contexts/profileContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const { profile } = useContext(ProfileContext);
    const navigate = useNavigate();
    if (profile.id == "") {
        navigate("/login");
    }
        
    return (
        <nav className="navbar navbar-expand-lg bg-primary-subtle">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    React CRUD
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/calendar">
                            Calendar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reservations">
                            Reservations
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/packages">
                            Packages
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/profile/:" + profile.id}>
                            Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/history">
                            History
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/payments">
                            Payments
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    }
