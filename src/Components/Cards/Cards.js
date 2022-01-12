import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';
import { CART_URL, COMPARE_URL, WISHLIST_URL } from '../../endpoint'

const Cards = React.memo((props) => {
    //POST data for Add to cart
    const handleCart = () => {
        const cartData = {
            userId: localStorage.getItem('id'),
            productId: props.id,
            quantity: 1
        }
        if (cartData.userId === null) {
            swal({
                title: "login please",
                timer:2000
            })
        } else {
            axios.post(CART_URL, cartData)
                .then(response => {
                    console.log("Status: ", response.status);
                    console.log("Data: ", response.data);
                    if (response.status === 201) {
                        swal({
                            title: response.data.message,
                            timer: 2000,
                        })
                    } else {
                        swal({
                            title: "Try Again!",
                            timer:2000
                        })
                    }

                }).catch(error => {
                    console.error('Something went wrong!', error);
                });
        }
    }

    //POST data for WishList of card
    const handleWishlist = () => {
        const wishlistData = {
            userId: localStorage.getItem('id'),
            productId: props.id
        }
        if (wishlistData.userId === null) {
            swal({
                title: "login please",
                timer:2000
            })
        } else {
        axios.post(WISHLIST_URL, wishlistData)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                if (response.status === 201) {
                    swal({
                        title: response.data.message,
                        timer: 2000,
                    })
                } else {
                    swal({
                        title: "Try Again!",
                        timer:2000
                    })
                }
            }).catch(error => {
                console.error('Something went wrong!', error);
            });
        }
    }

    //handle compare
    const handleCompare = () => {
        const compareData = {
            userId: localStorage.getItem('id'),
            productId: props.id
        }
        if (compareData.userId === null) {
            swal({
                title: "login please",
                timer:2000
            })
        } else {
        axios.post( COMPARE_URL, compareData)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                if (response.status === 201) {
                    swal({
                        title: response.data.message,
                        timer: 2000,
                    })
                } else {
                    swal({
                        title: "Try Again!",
                        timer:2000
                    })
                }
            }).catch(error => {
                console.error('Something went wrong!', error);
            });
        }
    }

    //card structure
    return (

        <div className='card product-card mt-3 mb-3'>
            <div className='pro-compare d-flex align-items-center'>
                <span className='btn-compare me-2' onClick={handleCompare}>
                    <i className="fa fa-refresh px-1"></i>Compare</span>
                <button onClick={handleWishlist} data-toggle="tooltip" data-placement="top" title="Hooray!" className='btn-wishlist btn-sm'><i className="fa fa-heart-o" aria-hidden="true"></i></button>
            </div>
            <div className='product-img mt-3'>
                <Link to={`/product-details/` + props.id} className='text-center card-img-top d-block overflow-hidden'>
                    <img src={props.imgsrc} alt="productimg" height="200px" />
                </Link>
                <div className='px-3'>
                    <Link to={`/product-details/` + props.id} className='product-name d-block fs-xs'>{props.category}</Link>
                    <h3 className='product-title'>
                        <Link to={`/product-details/` + props.id}>{props.name}</Link>
                    </h3>
                </div>
                <div className='d-flex justify-content-between px-3 py-2'>
                    <div className='product-price'>
                        <span className='text-indigo'>${props.price}</span>
                    </div>
                    <div className='star-rating'>
                        {
                            Array.from(Array(props.star), (e, i) => {
                                return <i className="fa fa-star text-orange" aria-hidden="true" key={i}></i>
                            })
                        }
                    </div>
                </div>
                <div className="product-actionadd px-3">
                    <button className='btn btn btn-sm d-block w-100 mb-2 addto-cardbtn' onClick={handleCart}>
                        <i className="fa fa-shopping-cart px-1" aria-hidden="true"></i>
                        Add to Cart</button>
                    <div className='text-center'>
                        <Link to={`/product-details/` + props.id}>
                            <i className="fa fa-eye px-1" aria-hidden="true"></i>
                            Quick view</Link>
                    </div>
                </div>
            </div>
        </div>

    )
});
export default Cards