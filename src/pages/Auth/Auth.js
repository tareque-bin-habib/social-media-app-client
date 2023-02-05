import React from 'react';
import './Auth.css'
import logo from '../../img/logo.png'

const Auth = () => {
    return (
        <div className='auth'>
            <div className='a-left'>
                <img src={logo} alt="" />
                <div className='webName'>
                    <h1>Twick Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            <SignUp></SignUp>
        </div>
    );
};

function SignUp() {
    return (
        <div className='a-right'>
            <form className='info-form'>
                <h3>Sign up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstName' />
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastName' />
                </div>
                <div>
                    <input type="text" placeholder='User name' className='infoInput' name='userName' />
                </div>
                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password' />
                    <input type="text" placeholder='Confirm Password' className='infoInput' name='confirm' />
                </div>

            </form>
        </div>
    )
}

export default Auth;