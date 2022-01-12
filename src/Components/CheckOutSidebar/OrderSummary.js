import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios'
import { methods } from '../../assets/Data/data'
import { CART_URL } from "../../endpoint";
const OrderSummary = ({
    // subTotal,
    // tax,
    onEnterPromoCode,
    checkPromoCode }) => {
    //TotalPrice
    var totalCartPrice = 0;

    const [Data, setData] = useState([]);
    const [Empty, setEmptyData] = useState(false)
    //promocode
    const [promoCode, setPromoCode] = useState("");
    const [discountPercent, setDiscountPercent] = useState(0);
    const SubTotal = Data.reduce((total, product) => {
        return total + product.price * +product.quantity;
    }, 0);
    const TAX = 5;
    // const ShippingCharge = 5;
    const ShippingCharge = methods.reduce((shipping, charge) => {
        return charge.tax;
    }, 0);
    const total = SubTotal + TAX + ShippingCharge - discountPercent;

    onEnterPromoCode = (event) => {
        setPromoCode(event.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
    };
    const PROMOTIONS = [
        {
            code: "ONE",
            discount: "40%"
        },
        {
            code: "TWO",
            discount: "20%"
        },
        {
            code: "THREE",
            discount: "10%"
        },
        {
            code: "FOUR",
            discount: "5%"
        },
        {
            code: "FIVE",
            discount: "15%"
        },
    ]

    checkPromoCode = () => {
        for (var i = 0; i < PROMOTIONS.length; i++) {
            if (promoCode === PROMOTIONS[i].code) {
                setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));
                return;
            }
        }
        alert("Sorry, the Promotional code you entered is not valid!");
    };
    //promocodeend
    useEffect(() => {
        window.scrollTo(0, 0)
        try {
            axios.get(CART_URL + "/" + localStorage.getItem('id')).then(res => {
                console.log(res)
                if (res.status === 200) {
                    setData(res.data.data);
                } else if (res.status === 204) {
                    setEmptyData(true)
                }
            })
        } catch (error) {
            console.warn(error)
        }
    }, [])
    return (
        <div>

            <div className='card rounded-3 shadow-lg p-4'>
                <div className='card-head text-center'>
                    <h6>Order Summary</h6>
                    <div>
                        {
                            Data.map((value, index) => {
                                totalCartPrice += value.product.price * value.product.quantity
                                if (Empty === value._id) {
                                    return ("")
                                } else {
                                    return (
                                        <Link to="/product-details" key={index}>
                                            <div className='d-flex align-items-center border-bottom'>
                                                <div className=''>
                                                    <img src={value.product.image} alt='product' width="70" className='img-fluid'></img>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='mt-4 Check-out-product-body'>
                                                        <h6 className='Check-out-product-title'>{value.product.name}</h6>
                                                        <p className='Check-out-product-price'>${value.product.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                }
                            })
                        }
                        {/* {
                            Empty ? <div>
                                <h4 className='mt-3'>Your Cart is Empty</h4>
                                <p className='mt-3'>Add items to it now.</p>
                                <div className="mt-4">
                                    <a className="Button-Full-Red block" href='/product'><i className="fa fa-shopping-cart me-2"></i>Shop Now</a>
                                </div>
                            </div>
                                : ""
                        } */}
                    </div>
                    {
                        methods.map((charge, index) => {
                            <div key={index}>
                                <ul className="list-unstyled fs-sm pb-2 border-bottom mt-2">
                                    <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD">
                                        <span className="me-2">Subtotal:</span><span className="text-end">$ {SubTotal}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD">
                                        <span className="me-2">Shipping:</span><span className="text-end">$ {charge.tax}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD">
                                        <span className="me-2">Taxes:</span><span className="text-end">$ {TAX}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD">
                                        <span className="me-2">Discount:</span><span className="text-end">$ {discountPercent}</span>
                                    </li>
                                </ul>
                                <h3 className="fw-normal text-center my-4">$ {total}</h3>
                                <form onSubmit={onSubmit}>
                                    <input type="text" className="form-control" autoComplete="off" placeholder="Promo code" onChange={onEnterPromoCode} />
                                    <button className='btn Button-Red-Border d-block w-100 mt-3' onClick={checkPromoCode}>Apply promo code</button>
                                </form>
                            </div>
                        })}
                </div>
            </div>
        </div>
    )
}
export default OrderSummary