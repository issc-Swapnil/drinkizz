import React from 'react'
import '../layout.css';
import cards_alt from '../../assets/images/Footer/cards-alt.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <section className="container-fluid px-0">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <Link className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-orange" to="/">
                                <div className="card-body text-center">
                                    <i className="text-orange fa fa-edit mb-2"></i>
                                    <h3 className="h5 mb-1 text-dark">Read Our blog</h3>
                                    <p className="text-muted fs-sm">Latest products</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to="/" className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-indigo">
                                <div className="card-body text-center">
                                    <i className="text-indigo fa fa-instagram mb-2"></i>
                                    <h3 className="h5 mb-1 text-dark">Follow on Instagram</h3>
                                    <p className="text-muted fs-sm">#OrderWithDrinkizz</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="pt-3 sec-2-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start">

                                    <div className="compare-sec-footer compare-links compare-light">
                                        <ul className="compare-list-ul-footer d-flex flex-wrap justify-content-center justify-content-md-start">
                                            <li className="compare-list-footer me-4"><Link className="compare-list-link-footer" to="/">Outlets</Link></li>
                                            <li className="compare-list-footer me-4"><Link className="compare-list-link-footer" to="/">Affiliates</Link></li>
                                            <li className="compare-list-footer me-4"><Link className="compare-list-link-footer" to="/">Support</Link></li>
                                            <li className="compare-list-footer me-4"><Link className="compare-list-link-footer" to="/">Privacy</Link></li>
                                            <li className="compare-list-footer me-4"><Link className="compare-list-link-footer" to="/">Terms of use</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 text-center mb-1'>
                                    <img className="d-inline-block" src={cards_alt} width="187" alt="Payment methods" />

                                </div>
                                <div className="col-md-4 text-center text-md-end mb-2">
                                    <div className="">
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="https://www.facebook.com/">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="https://www.facebook.com/">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="https://www.facebook.com/">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="https://www.facebook.com/">
                                            <i className="fa fa-pinterest"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="https://www.facebook.com/">
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Footer;

