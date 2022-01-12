// code flow
// 1. check user is signin or not by localStorage id 
// 2.if user signin show data else signin component 
// 3.if user is sign in check loader condition if loading then skeleton else data
//4.check data is empty or not if empty show add to cart UI else none
//5.after deleting component filter the deleted product id and Data id if not match then assign new flitered Data 
//if new data is empty show empty else remove selected id


import React, { useState, useEffect } from "react";
import './Cart.css'
import { Accordion } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { Link } from "react-router-dom";
import { CART_URL } from "../../endpoint";
import swal from 'sweetalert';
const Cart = () => {
    const NoDataInCart = React.lazy(() => import('../../Components/NoDataFound/NoDataInCart'))
    const SignInFirst = React.lazy(() => import('../../Components/SignInFirst/SignInFirst'))

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        swal({
            title: "Thanks! Order is on the way",
            timer: 2000,
        })
        reset();
    }
    const [Data, setData] = useState([]);
    const [Loder, setLoader] = useState(false)
    const [Empty, setEmptyData] = useState(false)

    //Load more button
    const [noOfElement, setnoOfElement] = useState(4);
    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement)
    }

    //TotalPrice
    var totalCartPrice = 0;

    const userId = localStorage.getItem('id')
    //get data
    useEffect(() => {
        try {
            setLoader(true)
            axios.get(CART_URL + "/" + userId).then(res => {
                if (res.status === 200) {
                    setData(res.data.data);
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

    // cart delete
    const Deletecart = (ids) => {
        axios.delete(CART_URL + "/" + ids).then(res => {
            if (res.status === 200) {
                swal({
                    title: "Removed From Cart!",
                    timer: 2000,
                }).then(() => {
                    const newData = Data.filter(item => ids !== item._id)
                    if (newData.length === 0) {
                        setEmptyData(true);
                        setData([])
                    } else {
                        setData(newData)
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

    //skeleton
    const SkeletonCartItem = [0, 1, 2].map(() => {
        return (
            <div key={Math.random()}>
                <div className='row Skeleton-Cart'>
                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3 Cart-list-item-img'>
                        <div className='p-3 Cart-skeleton-img'>
                        </div>
                    </div>
                    <div className='product-desc col-lg-7 col-md-7 col-sm-7 col-xs-6'><a href='/product-details'>
                        <h6 className='title-text-color'></h6>
                        <span><p> </p></span>
                        <span><p> </p></span>
                        <h4> </h4>
                    </a></div>
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
        <>
            <div className='nav-container'></div>
            {
                userId ?
                    <div className='cart'>
                        {/*------------- Header End--------------------- */}
                        {/* -------------------Cart list started ------------------*/}
                        <div className='container Cart-list'>
                            <div className='row'>
                                <div className='col-lg-8'>
                                    {/* --------------condition checking---------------------------*/}
                                    {/* ------------if loader show skeleton else card-------------*/}
                                    {
                                        !Loder ?
                                            Data.slice(0, noOfElement).map((v, i) => {
                                                totalCartPrice += v.product.price * v.quantity
                                                return (
                                                    <div key={i}>
                                                        <div className='d-flex row Cart-list-item align-items-center'>
                                                            <div className='d-flex align-items-center col-lg-3 col-md-3 col-sm-3 col-xs-3 Cart-list-item-img'>
                                                                <div className='p-3'>
                                                                    <img src={v.product.image} className='img-fluid'
                                                                        width="150px" height="150px" />
                                                                </div>
                                                            </div>
                                                            <div className='product-desc col-lg-7 col-md-7 col-sm-7 col-xs-6'>
                                                                <Link to={"/product-details/" + v.product._id}>
                                                                    <h6 className='title-text-color'>{v.product.name}</h6>
                                                                    {/* <span className='text-muted'>Size: {v.size}</span> */}
                                                                    <span className='text-muted'>Category: {v.product.category}</span>
                                                                    <br />
                                                                    <span className='text-muted'>ABV: {v.product.ABV}</span>
                                                                    <br />
                                                                    <span className='text-muted mb-1'>size: {v.product.size}</span>
                                                                    <p className='text-indigo fs-lg'>${v.product.price}</p>
                                                                </Link></div>

                                                            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-3 Delete-Cart-Item'>
                                                                <p className='text-quantity'>Quantity : {v.quantity}</p>
                                                                {/* <input type="number" defaultValue={v.quantity} className='quanity-bar' /><br /> */}
                                                                <a className='text-red remove-link mt-2' onClick={() => Deletecart(v._id)}>
                                                                    <i className='fa fa-close'></i>&nbsp;Remove
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                )

                                            }) : SkeletonCartItem
                                    }
                                    {/* ---------if empty show no data in cart ---------- */}
                                    {
                                        Empty ? <NoDataInCart ButtonName="Shop Now" /> : ""
                                    }

                                    {/* ------------------------load more button----------------------------------- */}
                                    {
                                        Data.length >= 4 && Data.length >= noOfElement ?
                                            <div className='row my-4'>
                                                <button className='btn Button-Blue-Border d-block w-100' onClick={() => loadMore()}>
                                                    <i className='fa fa-refresh'></i>&nbsp; &nbsp; Load More</button>
                                            </div>
                                            : ""
                                    }
                                </div>
                                {/*------------------------- Additional Comments start------------- */}

                                {!Empty ?
                                    <div className='col-lg-4'>
                                        <div className='card rounded-3 shadow-lg p-4'>
                                            <form onSubmit={handleSubmit(onSubmit)} >
                                                <div className='card-head text-center'>
                                                    <h5>Subtotal</h5>
                                                    <h3>$ {totalCartPrice}</h3>
                                                    <hr />
                                                </div>
                                                <Accordion defaultActiveKey="1">
                                                    <div>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Apply Promo Code</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="form-group mb-3">
                                                                    <input type="text"
                                                                        className="form-control" autoComplete="off" placeholder="promo code" />
                                                                        <input type="hidden" value={totalCartPrice} {...register("totalprice", { required: true, })}/>
                                                                </div>
                                                                <button className='btn Button-Red-Border w-100'>Apply promo code</button>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header>Personal Details</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="mb-2">
                                                                    <input className="form-control" type="text" placeholder="Name"
                                                                        required="" {...register("name", { required: true, })} />
                                                                    <span className="error-msg" title="invlid subject">{errors.name && "Please provide valid name"}</span>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <input className="form-control" type="email" placeholder="Email "
                                                                        required="" {...register("email", { required: true, })} />
                                                                    <span className="error-msg" title="invlid subject">{errors.email && "Please provide valid email"}</span>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <input className="form-control" type="number" placeholder="Number"
                                                                        required="" {...register("phone", { required: true, })} />
                                                                    <span className="error-msg" title="invlid subject">{errors.phone && "Please provide valid number"}</span>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                      
                                                    </div>
                                                </Accordion>
                                                <br />
                                                <button className='Button-Full-Red' type="submit">Place Order</button>
                                            </form>

                                        </div>
                                    </div> : ""}
                            </div>
                            {/* Additional Comments end */}
                        </div>
                        {/* Cart List end */}
                    </div> : <SignInFirst />}
        </>
    )
}

export default Cart
