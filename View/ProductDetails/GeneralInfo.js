import React from 'react'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProductDetail.css'

const GeneralInfo = React.memo((props) => {
    return (
        <div className="tab-content px-lg-3">
            <div className="tab-pane fade active show" id="general" role="tabpanel">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 pe-lg-0 " >
                        <img src={props.image} className='img-fluid' width="70%"></img>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <div className="product-details ms-auto pb-3">
                            <div className='h3 product-desc-price'>$ {props.price}</div>
                        </div>
                        <div className="d-flex align-items-center pt-2 pb-4">
                            <select className="form-select me-3" style={{ width: "5rem" }}
                            // defaultValue={props.quantity}
                             onChange={(e)=>props.handleSelectChanges(e.target.value)} value={props.selectedClients}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button className="Button-Full-Red d-block w-100" data-toggle="tooltip" data-placement="top"
                                onClick={props.handleSubmitCarts}>
                                <i className="fa fa-shopping-cart me-2"></i>Add to Cart
                            </button>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="w-100 me-3">
                                <button className="btn-Gray d-block w-100" data-toggle="tooltip" data-placement="top"
                                    title="Hooray!" onClick={props.handleSubmitWsishlists} type="button">
                                    <i className="fa fa-heart-o me-2" style={{ color: "gray" }}></i>
                                    <span className="d-none d-sm-inline">Add to </span>Wishlist
                                </button>
                            </div>
                            <div className="w-100">
                                <button className="btn-Gray d-block w-100" type="button" onClick={props.handleSubmitCompares}>
                                    <i className="fa fa-refresh me-2" style={{ color: "gray" }}></i>Compare
                                </button>
                            </div>
                        </div>
                        <Accordion>
                            <div>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><i className="fa fa-shipping-fast"></i>Shipping options</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="d-flex justify-content-between border-bottom pb-2">
                                            <div>
                                                <div className="fw-semibold text-dark">Local courier shipping</div>
                                                <div className="fs-sm text-muted">2 - 4 days</div>
                                            </div>
                                            <div>$16.50</div>
                                        </div>
                                        <div className="d-flex justify-content-between border-bottom py-2">
                                            <div>
                                                <div className="fw-semibold text-dark">UPS ground shipping</div>
                                                <div className="fs-sm text-muted">4 - 6 days</div>
                                            </div>
                                            <div>$19.00</div>
                                        </div>
                                        <div className="d-flex justify-content-between pt-2">
                                            <div>
                                                <div className="fw-semibold text-dark">Local pickup from store</div>
                                                <div className="fs-sm text-muted">—</div>
                                            </div>
                                            <div>$0.00</div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><i className="fa fa-map-marker-alt"></i>Find in local store</Accordion.Header>
                                    <Accordion.Body>
                                        <select className="form-select">
                                            <option value="">Select your country</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="France">France</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Spain">Spain</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="USA">USA</option>
                                        </select>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                        </Accordion>
                        <label className="form-label d-inline-block align-middle my-4 me-3">Share:</label>
                        <Link className="btn-share btn-twitter me-2 my-2" to="/product">
                            <i className="fa fa-twitter"></i>Twitter
                        </Link>
                        <Link className="btn-share btn-instagram me-2 my-2" to="/product">
                            <i className="fa fa-instagram"></i>Instagram
                        </Link>
                        <Link className="btn-share btn-facebook my-2" to="/product">
                            <i className="fa fa-facebook-f"></i>Facebook
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default GeneralInfo
