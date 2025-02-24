import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>

            <footer className="bg-dark text-light pt-4">
                <div className="container text-center text-md-start">
                    <div className="row">
                        {/* About Section */}
                        <div className="col-md-4 mb-3">
                            <h5>About Us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
                        </div>
                        {/* Quick Links */}
                        <div className="col-md-4 mb-3 quick-links">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Services</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                            </ul>
                        </div>
                        {/* Social Media Icons */}
                        <div className="col-md-4 mb-3 text-center social-icons">
                            <h5>Follow Us</h5>
                            <a href="#" className="text-light me-3"><i className="bi bi-instagram fs-2 " /></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-facebook fs-2" /></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-linkedin fs-2" /></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-twitter fs-2" /></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-youtube fs-2" /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center py-3 bg-secondary">
                    © 2025 Your Shopify | All Rights Reserved
                </div>
            </footer>




        </>
    )
}

export default Footer