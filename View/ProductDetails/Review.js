import React from 'react'
import { ReviewComments } from '../../assets/Data/data'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const Review = React.memo((props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        swal({
            title: "Thank You!",
            text: "Your Responce is Precious..",
            icon: "success",
        })
        reset();
    }
    return (
        <div>
            <div className="row d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                <div className="col-lg-4 col-sm-8 d-flex align-items-center me-md-3"><img src={props.image} width="90" alt="Product thumb" />
                    <div className="ps-3">
                        <h6 className="fs-base mb-2">{props.name}</h6>
                        <div className="h3 C-Tprice">${props.price}<small>99</small></div>
                    </div>
                </div>
                <div className=" col-lg-5 col-sm-8 d-flex align-items-center pt-3">
                    <select className="form-select me-2 w-50"
                        onChange={(e) => props.handleSelectChanges(e.target.value)} value={props.selectedClients}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button className="Button-Full-Red d-block w-100" data-toggle="tooltip" data-placement="top" onClick={props.handleSubmitCarts}>
                        <i className="fa fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                    <div className="me-2">
                        <button className="btn btn-small-desc" style={{ marginLeft: '7px' }} onClick={props.handleSubmitWsishlists}>
                            <i className="fa fa-heart-o" style={{ color: "gray" }}></i>
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-small-desc" onClick={props.handleSubmitCompares}>
                            <i className="fa fa-refresh" style={{ color: "gray" }}></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='row Shop-PD-Review border-bottom pb-4'>
                <div className='col-lg-4 col-md-5'>
                    <h2 className="h3 mb-4">74 Reviews</h2>
                    <i className="fa fa-star me-1"></i><i className="fa fa-star me-1"></i><i className="fa fa-star me-1"></i><i className="fa fa-star me-1"></i><i className="fa fa-star me-1" ></i>
                </div>
                <div className='col-lg-8 col-md-7 Shop-PD-Review-line'>
                    <div className="d-flex align-items-center mb-2">
                        <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted me-1" style={{ marginTop: '-5px' }}>5</span><i className="fa fa-star me-1"></i></div>
                        <div className="w-100">
                            <div className="progress" style={{ height: '4px' }}>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div><span className="text-muted ms-3">43</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted me-1" style={{ marginTop: '-5px' }}>4</span><i className="fa fa-star me-1"></i></div>
                        <div className="w-100">
                            <div className="progress" style={{ height: '4px' }}>
                                <div className="progress-bar" role="progressbar" style={{ width: '30%', backgroundColor: '#a7e453' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div><span className="text-muted ms-3">16</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted me-1" style={{ marginTop: '-5px' }}>3</span><i className="fa fa-star me-1"></i></div>
                        <div className="w-100">
                            <div className="progress" style={{ height: '4px' }}>
                                <div className="progress-bar" role="progressbar" style={{ width: '17%', backgroundColor: '#ffda75' }} aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div><span className="text-muted ms-3">9</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted me-1" style={{ marginTop: '-5px' }}>2</span><i className="fa fa-star me-1"></i></div>
                        <div className="w-100">
                            <div className="progress" style={{ height: '4px' }}>
                                <div className="progress-bar" role="progressbar" style={{ width: '9%', backgroundColor: '#fea569' }} aria-valuenow="9" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div><span className="text-muted ms-3">4</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted me-1" style={{ marginTop: '-5px' }}>1</span><i className="fa fa-star me-1"></i></div>
                        <div className="w-100">
                            <div className="progress" style={{ height: '4px' }}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '4%' }} aria-valuenow="4" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div><span className="text-muted ms-3">2</span>
                    </div>

                </div>
            </div>
            <div className='row py-4'>
                <div className='col-md-7'>
                  
                    {
                        ReviewComments.map((value, index) => {
                            return (
                                <div className="pb-4 mb-4 border-bottom" key={index}>
                                    <div className="d-flex mb-3 justify-content-between">
                                        <div className="d-flex align-items-center me-4 pe-2"><img className="rounded-circle" src={value.profileimg} width="50" alt="Rafael Marquez" />
                                            <div className="ps-3">
                                                <h6 className="mb-0">{value.Name}</h6><span className="Review-comment-date text-muted">{value.Date}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="star-rating"><i className="fa fa-star "></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star "></i></div>
                                        </div>
                                    </div>
                                    <p className="mb-2">{value.Comment}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='col-md-5 mt-2 pt-4 mt-md-0 pt-md-0 '>
                    <div className='Review-Comment-Form rounded-3'>
                        <h3 className="h4 pb-2">Write a review</h3>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-group mb-3">
                                <label className='form-label'>Your Name<span style={{ color: 'red' }}>*</span></label>
                                <input type="text"
                                    {...register("name", {
                                        required: true,
                                        pattern: {
                                            value: "^[A-Za-z]$",
                                            message: "please enter valid name"
                                        },
                                        minLength: 3, maxLength: 60
                                    })}
                                    className="form-control" autoComplete="off" placeholder="" />
                                <span className="error-msg" title="name required">{errors.name && "Please enter your name."}</span>
                            </div>
                            <div className="form-group mb-3">
                                <label className='form-label'>Your Email<span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="email"
                                    autoComplete="off"
                                    {...register("email", {
                                        required: true,
                                    })}
                                    className="form-control"
                                />
                                <span className="error-msg" title="invalid email address">{errors.email && "please provide valid e-mail address."}</span>
                            </div>

                            <div className="form-group mb-3">
                                <label className='form-label'>Rating<span style={{ color: 'red' }}>*</span></label>
                                <select className="form-select" required="" id="review-rating" {...register("comment", {
                                    required: true,
                                })}>
                                    <option value="">Choose rating</option>
                                    <option value="5">5 stars</option>
                                    <option value="4">4 stars</option>
                                    <option value="3">3 stars</option>
                                    <option value="2">2 stars</option>
                                    <option value="1">1 star</option>
                                </select><span className="error-msg" title="invlid subject">{errors.comment && "Please Choose Rating"}</span>
                            </div>
                            <div className="form-group mb-3">
                                <label className='form-label'>Review<span style={{ color: 'red' }}>*</span></label>
                                <textarea autoComplete="off"
                                    placeholder=""
                                    {...register("comment", {
                                        required: true,
                                    })}
                                    className="form-control" rows="4"  ></textarea>
                                <span className="error-msg" title="invlid subject">{errors.comment && "Please write a review."}</span>
                            </div>
                            <div className="form-group ">
                                <button className="Button-Full-Red w-100" type="submit">
                                    <span>Submit a Review</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Review
