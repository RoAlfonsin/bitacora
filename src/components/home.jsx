import React from "react";
import { useContext, useEffect } from "react";
import { ProfileContext } from "../contexts/profileContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const { profile } = useContext(ProfileContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (profile.id == "") {
            navigate("/login");
        }
        else {
            navigate("/calendar");
        }
    }, [profile]);
    
    return (
        <>
            <h1>This is home</h1>
        </>
    );
}