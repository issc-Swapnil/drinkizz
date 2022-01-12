import React from 'react'
import SignIn from '../SignIn/SignIn'

const SignInFirst = () => {
    return (
        <div className='SignInFirst p-3'>
            <div className='card text-center p-5'>
                <h6>Missing Cart Item?</h6>
                <p>Login to see the items you added previously</p>
                <SignIn />
            </div>
        </div>
    )
}

export default SignInFirst
