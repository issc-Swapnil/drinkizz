import React, { useState, useEffect } from 'react'
import './ProductDetail.css'
import { Tab, Tabs } from 'react-bootstrap'
import swal from 'sweetalert';
import axios from 'axios'
import { PRODUCT_URL, WISHLIST_URL, CART_URL, COMPARE_URL } from '../../endpoint'

const Shop = (({ match },) => {
    const Card = React.lazy(() => import('../../Components/Cards/Cards'))
    const Review = React.lazy(() => import('./Review'))
    const GeneralInfo = React.lazy(() => import('./GeneralInfo'))
    const TechSpace = React.lazy(() => import('./TechSpace'))

    const [Data, setData] = useState({})
    const [CategoryData, setCategoryData] = useState([])
    const [selectedClient, setSelectedClient] = useState("1");


    //wishlist data handle
    const handleSubmitWsishlist = () => {
        const data2 = {
            "userId": localStorage.getItem('id'),
            "productId": Data._id,
        };
        if (data2.userId === null) {
            swal({
                title: "login please",
                timer: 2000
            })
        } else {
            axios.post(WISHLIST_URL, data2)
                .then(response => {
                    if (response.status === 201) {
                        swal({
                            title: response.data.message,
                            timer: 2000,
                        })
                    } else {
                        swal({
                            title: "Try Again!",
                        })
                    }
                }).catch(error => {
                    console.error('Something went wrong!', error);
                });
        }
    }

    // cart data handle
    const handleSubmitCart = () => {
        const DataToCart = {
            "userId": localStorage.getItem('id'),
            "productId": Data._id,
            "quantity": selectedClient
        }
        if (DataToCart.userId === null) {
            swal({
                title: "login please",
                timer: 2000
            })
        } else {
            axios.post(CART_URL, DataToCart)
                .then(response => {
                    if (response.status === 201) {
                        swal({
                            title: response.data.message,
                            timer: 2000
                        })
                    } else {
                        swal({
                            title: "Try Again"
                        })
                    }
                }).catch(error => {
                    console.error('Something went wrong !', error);
                });
        }
    }


    //handle compare data 

    const handleSubmitCompare = () => {
        const data2 = {
            "userId": localStorage.getItem('id'),
            "productId": Data._id,
        };
        if (data2.userId === null) {
            swal({
                title: "login please",
                timer: 2000
            })
        } else {
            axios.post(COMPARE_URL, data2)
                .then(response => {
                    if (response.status === 201) {
                        swal({
                            title: response.data.message,
                            timer: 2000,
                        })
                    } else {
                        swal({
                            title: "Try Again!",
                        })
                    }
                }).catch(error => {
                    console.error('Something went wrong!', error);
                });
        }
    }


    //options data
    function handleSelectChange(event) {
        console.log(event)
        setSelectedClient(event);
    }

    //getdata
    useEffect(() => {
        axios.get(PRODUCT_URL + "/" + match.params.id).then((res) => {
            if (res.status === 200) {
                setData(res.data)
            }
            axios.get(PRODUCT_URL + "/category/" + res.data.category).then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    setCategoryData(response.data)
                }
            })
        })
    }, [match.params.id])

    return (
        <>
            <div className='nav-container'></div>

            <div className='product-details'>
                {/* Header */}
                <div className='Heading-back-com2'> </div>
                <section className='Product-Description my-4'>
                    <div className='container'>
                        <div className='Product-desc-back rounded-3 '>
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="" defaultActiveKey="general">
                                {/* Tabfirst General Info start */}
                                <Tab eventKey="general" title=" General Info" className='py-4 px-sm-4'>
                                    <GeneralInfo
                                        selectedClients={selectedClient}
                                        handleSelectChanges={handleSelectChange}
                                        handleSubmitCompares={handleSubmitCompare}
                                        image={Data.image}
                                        price={Data.price}
                                        handleSubmitCarts={handleSubmitCart} />
                                </Tab>
                                {/* Tab Tech Specs start */}
                                <Tab eventKey="specs" title="Tech Specs" className='py-4 px-sm-4'>
                                    <TechSpace
                                        name={Data.name}
                                        category={Data.category}
                                        subCategory={Data.subCategory}
                                        size={Data.size}
                                        FoodPairing={Data.FoodPairing}
                                        image={Data.image}
                                        price={Data.price}
                                        ABV={Data.ABV}
                                        selectedClients={selectedClient}
                                        handleSelectChanges={handleSelectChange}
                                        handleSubmitWsishlists={handleSubmitWsishlist}
                                        handleSubmitCarts={handleSubmitCart}
                                        handleSubmitCompares={handleSubmitCompare}
                                    />
                                </Tab>
                                {/* Tab Reviews Start */}
                                <Tab eventKey="reviews" title="Reviews" className='py-4 px-sm-4'>
                                    <Review
                                        name={Data.name}
                                        image={Data.image}
                                        price={Data.price}
                                        selectedClients={selectedClient}
                                        handleSelectChanges={handleSelectChange}
                                        handleSubmitWsishlists={handleSubmitWsishlist}
                                        handleSubmitCompares={handleSubmitCompare}
                                        handleSubmitCarts={handleSubmitCart} />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </section>
                {
                    CategoryData.length > 2 &&
                    <section className='You-May-Also-like-Product mb-5'>
                        <div className='container'>
                            <h2 className="h3 text-center pb-4">You May Also Like</h2>
                            {/* <OwlCarousel options={options}> */}
                            <div className='row'>
                                {CategoryData.map((productdata, i) => (
                                    <div key={i} className='col-lg-3'>
                                        <Card
                                            id={productdata._id}
                                            category={productdata.category}
                                            name={productdata.name}
                                            price={productdata.price}
                                            imgsrc={productdata.image}
                                            star={productdata.star} />
                                    </div>
                                ))}
                            </div>
                            {/* </OwlCarousel> */}
                        </div>
                    </section>
                }

            </div>
        </>
    )
});

export default Shop
