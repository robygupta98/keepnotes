import React from 'react';
import "../keepNote/KeepNote.css";


const Footer = () => {
    let year=new Date().getFullYear();
    return (
        <>
            <footer className="text-dark footer">
                <p className="text-center">copyright &copy; {year}</p>
            </footer>
        </>
    )
}

export default Footer
