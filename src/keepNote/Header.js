import React from 'react';
import logo from "./Images/logo.png";
import "../keepNote/KeepNote.css";

const Header = () => {
    return (
        <>
            <div className="heading">
                <img src={logo} alt="logo" />
                <h1>Roby keep</h1>
            </div>
        </>
    )
}

export default Header
