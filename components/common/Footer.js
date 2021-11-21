import React from 'react'
import Link  from 'next/link'

const Footer = () => {
    return (
        <footer className="footer py-100">
            <div className="container">
                <div className="footer-top">
                <div className="row">
                    <div className="col-lg-3 mb-4 mb-lg-0">
                    <div className="footer-content">
                        <h5 className="footer-title text-uppercase">Onefuillment</h5>
                        <p className="footer-text py-3">
                        Hypotheses ramen mass market assets innovator stealth burn
                        rate holy grail
                        </p>
                        <ul className="nav social">
                        <li className="social-item">
                            <a href="" className="social-link">
                            <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="" className="social-link">
                            <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="" className="social-link">
                            <i className="fab fa-pinterest"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                    <div className="foter-content">
                        <h5 className="footer-title mb-3">Contact</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <span className="nav-link">(239) 555-0108</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">info@onefull.com</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">
                            2464 Royal Ln. Mesa, New Jersey 45463
                            </span>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                    <div className="foter-content">
                        <h5 className="footer-title mb-3">Follow</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Instagram</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Facebook</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Twitter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pinterest</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                    <div className="foter-content">
                        <h5 className="footer-title mb-3">Support</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Privacy Policy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
