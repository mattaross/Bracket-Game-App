import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p className="footer-text">Copyright Matthew Alvarado-Ross {currentYear}</p>
        </footer>
    );
}

export default Footer;