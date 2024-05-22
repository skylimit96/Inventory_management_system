import './Footer.css';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'

function Footer() {
    return(
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <div className="text-center p-4">
                    © 2024 Copyright - Made with <i class="bi bi-heart-fill"></i> by : <b>Amine Sehlaoui</b>
                </div>
            </footer>
        </>
    );
}

export default Footer;