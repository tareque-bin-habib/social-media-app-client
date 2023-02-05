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
            {/* <SignUp></SignUp> */}
            <Login></Login>
        </div>
    );
};


function Login() {
    return (
        <div className='a-right'>
            <form className='info-form authFormLogin'>
                <h3>Login</h3>
                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='UserName' />
                </div>
                <div>
                    <input type="password" placeholder='Password' className='infoInput' name='password' />
                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>Don't have an account Signup!</span>
                </div>
                <button className='button infoButton' type='submit'>Login</button>

            </form>
        </div>
    )
}


function SignUp() {
    return (
        <div className='a-right'>
            <form className='info-form authForm'>
                <h3>Sign up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstName' />
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastName' />
                </div>
                <div>
                    <input type="text" placeholder='User name' className='infoInput' name='userName' />
                </div>
                <div>
                    <input type="password" placeholder='Password' className='infoInput' name='password' />
                    <input type="password" placeholder='Confirm Password' className='infoInput' name='confirm' />
                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>Already have an account. Login!</span>
                </div>
                <button className='button infoButton' type='submit'>Signup</button>

            </form>
        </div>
    )
}

export default Auth;