import React, { useEffect, useState } from 'react'
import { Modal, Tab, Tabs, NavDropdown } from 'react-bootstrap';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { LOGIN } from '../../endpoint';
import swal from 'sweetalert';
const SignIn = () => {
    // for modal
    const [show, setShow] = useState(false);
    const [name, setName] = useState("Hello , signIn")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //logout
    const LogOut = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        localStorage.removeItem('id')
        window.location.reload()
        setName("Hello , signIn")
    }

    // submit sigin data
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur" });
    const onSubmit = data => {
        axios.post(LOGIN, data).then(res => {
            console.log(res)
            if (res.status === 201) {
                swal({
                    title: res.data.message,
                    timer: 2000
                })
            } else if (res.status === 200) {
                swal({
                    title: "Welcome to Daruwale!",
                    timer: 2000
                })
                reset();
                handleClose();
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', res.data.data.name)
                localStorage.setItem('id', res.data.data.userId)
                setName(res.data.data.name)
                window.location.reload()
                
            } else {
                swal({
                    title: "Something went wrong! Try again!"
                })
            }
        })
        console.log(data);
    }

    //submit register data
    const { register: register2, formState: { errors: errors2 }, handleSubmit: handleSubmit2, reset: reset1 } = useForm({ mode: "onBlur", });
    const handleSignUp = (data) => {
        alert(JSON.stringify(data));
        console.log(data);
        reset1();
    }

    //check login or not
    useEffect(() => {
        const n = localStorage.getItem('name')
        setName(n)
    }, [name])

    return (
        <>
            {/* if login show logout component else login component */}
            {
                name ?
                    <NavDropdown
                        className='text-white'
                        id="nav-dropdown-dark-example nav-link"
                        title={"Hello, " + name}
                        menuVariant="Danger">
                        <NavDropdown.Item onClick={() => LogOut()}>
                            <i className="fa fa-sign-out me-2"></i>SignOut</NavDropdown.Item>
                    </NavDropdown>
                    :
                    <span style={{ cursor: "pointer" }} className='nav-link'>
                        <span onClick={handleShow}>
                            <i className='fa fa-user-o text-danger'></i>&nbsp; {name ? name : "Hello ,Sign In"}</span>
                    </span>
            }

            {/* modal for signin signup */}
            <div className='Modal-signin-up' style={{ display: !show ? 'none' : '' }}>
                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" id="signin_modal" aria-hidden="true" tabIndex="-1" role="dialog" centered>
                    <div className='modalsingin-up-close'>
                        <button className="btn-close" type="button" onClick={() => handleClose(true)}></button>
                    </div>

                    {/* //signin tab// */}
                    <Tabs defaultactivekey="Signin" id="uncontrolled-tab-example" className="mb-3 flex-row">
                        <Tab eventKey="Signin" title="Signin" className='signin-tab' defaultactivekey="Signin">
                            <div className='Sign-in-modal'>
                                <div className="modal-body tab-content py-4">
                                    <form className="" key={1} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label className="form-label signup-form-label">Email address</label>
                                            <input className="form-control signup-input" type="email" {...register("email", { required: true })} />
                                            <div className='text-errormsg'>{errors.email && "Please provide a valid email address."}</div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label signup-form-label">Password</label>
                                            <input className="form-control signup-input" type="password" {...register("password", { required: true })} />
                                            <div className='text-errormsg'>{errors.password && "Please provide a valid Password."}</div>
                                        </div>
                                        <div className="mb-3 d-flex flex-wrap justify-content-between">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input sinupform" type="checkbox" />
                                                <label className="form-check-label">Remember me</label>
                                            </div>
                                            <Link className="signup-forgot" to="#">Forgot password?</Link>
                                        </div>
                                        <button className="btn btn-primary btn-shadow d-block w-100 compare-btn-signup" type="submit">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </Tab>

                        {/* //signout tab// */}
                        <Tab eventKey="Signup" title="Signup">
                            <div className='Sign-up-modal'>
                                <div className="modal-body tab-content py-4">
                                    <form autoComplete="off" key={2} onSubmit={handleSubmit2(handleSignUp)}>
                                        <div className="mb-3">
                                            <label className="form-label signup-form-label">Full Name</label>
                                            <input className="form-control signup-input" {...register2("name", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                                            <div className='text-errormsg'>
                                                {errors2.name && "Please enter your name."}
                                                {errors2?.name?.type === "maxLength" && (
                                                    <p>First name cannot exceed 20 characters</p>
                                                )}
                                                {errors2?.name?.type === "pattern" && (
                                                    <p>Alphabetical characters only</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label signup-form-label">Email address</label>
                                            <input className="form-control signup-input" type="email" {...register2("emails", { required: true })} />
                                            <div className='text-errormsg'>{errors2.emails && "Please enter your email."}</div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label signup-form-label">Password</label>
                                            <div className='password-toggle'>
                                                <input className="form-control signup-input" type="password" {...register2("password1", { required: true })} />
                                            </div>
                                            <div className='text-errormsg'>{errors2.password1 && "Please enter your password."}</div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label signup-form-label">Confirm Password</label>
                                            <div className="password-toggle">
                                                <input className="form-control signup-input" type="password" {...register2("confirmpassword", { required: true })} />
                                            </div>
                                            <div className='text-errormsg'>{errors2.confirmpassword && "Please enter your password."}</div>
                                        </div>
                                        <button className="btn btn-primary btn-shadow d-block w-100 compare-btn-signup" type="submit">Sign Up</button>
                                    </form>
                                </div>
                            </div>
                        </Tab>
                        {/* end signup tab */}
                    </Tabs>
                </Modal>
            </div>
        </>
    )
}
export default SignIn
