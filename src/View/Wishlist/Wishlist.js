import React, { useState, useEffect } from 'react'
import './wishlist.css';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { WISHLIST_URL } from "../../endpoint"

const Wishlist = () => {
    const NoDataInCart = React.lazy(() => import('../../Components/NoDataFound/NoDataInCart'))
    const SignInFirst = React.lazy(() => import('../../Components/SignInFirst/SignInFirst'))
    const [Loder, setLoader] = useState(false)
    const [items, setItems] = useState([]);
    const [Empty, setEmptyData] = useState(false)
    //Load more button
    const [noOfElement, setnoOfElement] = useState(3);
    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement)
    }

    const userId = localStorage.getItem('id')

    //get data from Api
    useEffect(() => {
        setLoader(true)
        try {
            axios.get(WISHLIST_URL + "/" + userId)
                .then(res => {
                    if (res.status === 200) {
                        setItems(res.data.data);
                        setLoader(false)
                    } else if (res.status === 204) {
                        setEmptyData(true)
                        setLoader(false)
                    }
                })
        } catch (error) {
            console.warn(error)
            setLoader(true)
        }
    }, [])

    // delete data
    const Deletecart = (ids) => {
        axios.delete(WISHLIST_URL + "/" + ids).then(res => {
            if (res.status === 200) {
                swal({
                    title: "Removed From Wishlist!",
                    timer: 2000,
                }).then(() => {
                    const newData = items.filter(item => ids !== item._id)
                    if (newData.length === 0) {
                        setEmptyData(true);
                        setItems([])
                    } else {
                        setItems(newData)
                    }
                })
            } else {
                swal({
                    title: "Try Again!",
                    timer: 2000
                })
            }
        })
    }

    //Skeleton start
    const SkeletonWishListItem = [0, 1, 2].map(() => {
        return (
            <div key={Math.random()}>
                <div className='row Skeleton-Cart'>
                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3 Cart-list-item-img'>
                        <div className='p-3 Cart-skeleton-img'>
                        </div>
                    </div>
                    <div className='product-desc col-lg-7 col-md-7 col-sm-7 col-xs-6'>
                        <Link to='/product-details'>
                            <h6 className='title-text-color'></h6>
                            <span><p> </p></span>
                            <span><p> </p></span>
                            <span><p> </p></span>
                            <h4> </h4>
                        </Link>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-3 Delete-Cart-Item'>
                        <p className='text-quantity'></p>
                        <h4></h4>
                        <p> </p>
                    </div>
                </div>
                <hr />
            </div>
        )
    })
    return (
        <div className='account'>
            <div className='nav-container'></div>
            {userId ?
                <>
                    <div className='container mb-4'>
                        {/* sidebar  onSelect={handleSelect()} */}

                        <div>
                            <div className="d-flex justify-content-between align-items-center px-4 mb-4">
                                <h6 className="text-dark fs-base mb-0 ml-4 pt-4 mt-1 ListSort">List of your registered addresses:</h6>
                                <button className="Button-Red-Border Button-Full-Red text-light me-2 mt-4 mb-0 btn-sm signoutbtn">
                                    <i className="fa fa-sign-out me-2"></i>Sign out
                                </button>
                            </div>
                            <hr style={{ "width": "100%", "textalign": "left", "marginleft": "0", "color": "black", "height": "3px" }}></hr>
                            {/* //check loading codition */}
                            {
                                !Loder ? items.slice(0, noOfElement).map((productdata, i) => {
                                    return (
                                        <div key={i}>
                                            <div className='row align-items-center d-flex' >
                                                <Link className='col-lg-3' to={"/product-details/" + productdata.product._id}>
                                                    <div className='d-block d-sm-flex align-items-start text-center text-sm-start'>
                                                        <img className="wishlist-img" src={productdata.product.image} alt="Product" height="190px" />
                                                    </div>
                                                </Link>
                                                <Link className='col-lg-7' to={"/product-details/" + productdata.product._id}>
                                                    <div className='d-block d-sm-flex align-items-start text-center text-sm-start'>
                                                        <div className="pt-2 product-order-wishlist">
                                                            <h3 className="text-dark font-weight-bold fs-base text-sm-start mb-2">{productdata.product.name}</h3>
                                                            <div className="fs-sm text-muted"><span className="text-muted me-2">Category:</span>{productdata.product.category}</div>
                                                            <div className="fs-sm text-muted"><span className="text-muted me-2">ABV:</span>{productdata.product.ABV}</div>
                                                            <div className="fs-sm text-muted"><span className="text-muted me-2">Size:</span>{productdata.product.size}</div>
                                                            <div className="fs-lg text-accent pt-2 mb-4 text-primary fw-bold">${productdata.product.price}</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className='col-lg-2'>
                                                    <div className='d-block d-sm-flex align-items-start text-center text-sm-start trash-wishlist'>
                                                        <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => Deletecart(productdata._id)}><i className="fa fa-trash me-2"></i>Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr style={{ "width": "100%", "textalign": "left", "marginleft": "0" }}></hr>
                                        </div>
                                    )
                                }) : SkeletonWishListItem
                            }
                            {/* check empty condition */}
                            {
                                Empty ?
                                    <NoDataInCart
                                        Message="Your Wishlist is Empty"
                                        suggestion="Add items now.."
                                        pagehref="/products"
                                        ButtonName="Shop Now"
                                    />
                                    : ""
                            }
                            {/* loader button */}
                            {
                                items.length >= 3 && items.length >= noOfElement ?
                                    <div className='row my-4'>
                                        <button className='btn Button-Blue-Border d-block w-100' onClick={() => loadMore()}>
                                            <i className='fa fa-refresh'></i>&nbsp; &nbsp; Load More</button>
                                    </div>
                                    : ""
                            }

                        </div>

                    </div>
                </>
                : <SignInFirst />}
        </div>
    )
}

export default Wishlist
