import React, { useEffect, useState } from "react"
import './Home.css'
import OfferBanneripad from '../../assets/images/Home/offer-banner.png'
import { clientCaroucel } from "../../assets/Data/data";
import { Link } from "react-router-dom";
import axios from 'axios'
import { PRODUCT_URL } from "../../endpoint";

const Home = () => {
    const Card = React.lazy(() => import('../../Components/Cards/Cards'))
    //GET/FETCH API Logic for Aceesing data from API using axios
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState();

    useEffect(() => {
        setLoader(true)
        try {
            axios.get(PRODUCT_URL).then(res => {
                console.log(res);
                console.log(res.data.data);
                setItems(res.data.data);
                console.log(items);
                setLoader(false)
            })
        } catch (err) {
            console.log(err)
            setLoader(true)
        }
    }, [])

    //For Skeleton & Card data HTML here in 2 diff variables
    const carditemdata =
        items.slice(0, 8).map((productdata, i) => (
            <div className='col-lg-3 col-md-4 col-sm-6 px-1' key={i}>
                <Card id={productdata._id}
                    category={productdata.category}
                    name={productdata.name}
                    price={productdata.price}
                    imgsrc={productdata.image}
                    star={productdata.rating}
                />
            </div>
        ))
    const skeleton =
        [0, 1, 2, 3].map(() => (
            <div className='col-lg-3 col-md-4 col-sm-6 px-1 Skeleton-products' key={Math.random()}>
                <div className="skel1div"></div><br />
                <h2></h2>
                <h3></h3>
                <div style={{ display: 'flex' }}><h2></h2><h2 style={{ marginLeft: '25%' }}></h2></div>
            </div>

        ))


    return (
        <div className='home'>
            {/* banner */}
            {/* Banner Offer Start */}
            <section className='Offers-Banner'>
                <div className='container'>
                    <div className='cardbox rounded-3 py-4'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-md-5'>
                                <div className='px-5'>
                                    <span className='Limited-Offer-tag bg-danger'>Limited Offer</span>
                                    <h3 className='mt-2 mb-1 fw-light text-body'>All new</h3>
                                    <h2 className='mb-1 text-white'>You want it? We got it.</h2>
                                    <p className='h5 fw-light  text-white'>Rosé? Check. Tito's? Check. That one killer
                                        pale ale you tried the other day? Check.
                                        We have the biggest selection for on-demand alcohol in the history of ever.</p>
                                    <button className='my-4 btn'>Check Out    <i className="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                            <div className='col-md-7 px-5'>
                                <img src={OfferBanneripad} alt="Offer On ipad" height="300px" width="100%"></img>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Banner Offer end */}
            {/* Banner Completed */}
            {/* Product cards start */}
            <section className="productcard-sec">
                <div className="container pt-2">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 ">
                            <h2>Trending products</h2>
                        </div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <input type="text" className='form-control search-bar'
                                placeholder='Search For Product' />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        {/* Skeleton & Card data condition check here */}
                        {!loader ? carditemdata : skeleton}
                    </div>
                </div>
            </section>
            {/* Product cards end */}
        </div>
    )
}

export default Home
