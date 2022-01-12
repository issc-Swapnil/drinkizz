import React from 'react'

const TechSpace = React.memo((props) => {
    return (
        <div className="tab-pane fade active show" id="specs" role="tabpanel">
            <div className="row d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                <div className="col-lg-4 col-sm-8 d-flex align-items-center me-md-3"><img src={props.image} width="90" alt="Product thumb" />
                    <div className="ps-3">
                        <h6 className="fs-base mb-2">{props.name}</h6>
                        <div className="h3 C-Tprice">${props.price}<small>99</small></div>
                    </div>
                </div>
                <div className=" col-lg-5 col-sm-8 d-flex align-items-center pt-3">
                    <select className="form-select me-2 w-50" 
                    onChange={(e)=>props.handleSelectChanges(e.target.value)} value={props.selectedClients}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button className="Button-Full-Red d-block w-100" data-toggle="tooltip" data-placement="top" onClick={props.handleSubmitCarts}>
                        <i className="fa fa-shopping-cart me-2"></i>Add to Cart</button>
                    <div className="me-2">
                        <button className="btn btn-small-desc" style={{ marginLeft: '7px' }} onClick={props.handleSubmitWsishlists} type="button">
                            <i className="fa fa-heart-o" style={{ color: "gray" }}></i></button>
                    </div>
                    <div>
                        <button className="btn btn-small-desc" onClick={props.handleSubmitCompares}>
                            <i className="fa fa-refresh" style={{ color: "gray" }}></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='product-desc'>
                <h3 className="h6">Product Descripton</h3>
                <p>{props.description}</p>

            </div>
            <div className="row pt-2">
                <div className="col-lg-5 col-sm-6">
                    <h3 className="h6">Product Details</h3>
                    <ul className="list-unstyled fs-sm pb-2">
                        <li className="d-flex justify-content-between pb-2 border-bottom">
                            <span className="text-muted">Name:</span><span>{props.name}</span>
                        </li>
                        <li className="d-flex justify-content-between pb-2 border-bottom">
                            <span className="text-muted">Category:</span><span>{props.category}</span>
                        </li>
                        <li className="d-flex justify-content-between pb-2 border-bottom">
                            <span className="text-muted">Sub Category:</span><span>{props.subCategory}</span>
                        </li>
                        <li className="d-flex justify-content-between pb-2 border-bottom">
                            <span className="text-muted">Price:</span><span>${props.price}</span>
                        </li>

                    </ul>

                </div>
                <div className="col-lg-2 col-sm-6">
                </div>
                <div className="col-lg-5 col-sm-6">
                    <h3 className="h6">Product Details</h3>
                    <ul className="list-unstyled fs-sm pb-2">
                        <li className="d-flex justify-content-between pb-2 border-bottom">
                            <span className="text-muted">Price:</span><span>${props.price}</span>
                        </li>
                        <li className="d-flex justify-content-between pb-2 border-bottom">
                            <span className="text-muted">Size:</span><span>{props.size}</span>
                        </li>
                        <li className="d-flex justify-content-between pb-2 border-bottom">
                            <span className="text-muted">Food Pairing:</span><span>{props.FoodPairing}</span>
                        </li>
                        <li className="d-flex justify-content-between pb-2 border-bottom">
                            <span className="text-muted">ABV:</span><span className='Specs-text-align'>{props.ABV}
                            </span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
});

export default TechSpace
