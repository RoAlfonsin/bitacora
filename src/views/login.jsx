import React from "react";
import { useContext } from "react";
import { ProfileContext } from "../contexts/profileContext";

export const Login = () => {
    const { profile, setProfile } = useContext(ProfileContext);
    
    return (
        <div className="container p-2 border text-center my-2 mx-auto" style={{width: "350px"}}>
            <div className="row">
                <div className="col-12">
                    <h1 className="m-2">Iniciar sesión</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary m-2">
                        <i className="bi bi-facebook"></i>
                        <span> - Login</span>
                    </button>
                    <button className="btn btn-danger m-2">
                        <i className="bi bi-google"></i>
                        <span> - Login</span>
                    </button>
                </div>
            </div>
        </div>
    );
};