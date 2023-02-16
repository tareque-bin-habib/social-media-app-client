import React, { useState } from 'react';
import './Auth.css'
import logo from '../../img/logo.png'
import { useDispatch } from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true)
    const dispatch = useDispatch()

    const [data, setData] = useState({ firstName: "", lastName: "", userName: "", password: "", confirm: "" })

    const [confirmPass, setConfirmpass] = useState(true)


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isSignUp) {
            data.password === data.confirmPass ? dispatch(signUp(data)) : setConfirmpass(false)
        }
        else {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setConfirmpass(true)
        setData({ firstName: "", lastName: "", userName: "", password: "", confirm: "" })
    }


    return (
        <div className='auth'>
            {/* left side */}
            <div className='a-left'>
                <img src={logo} alt="" />
                <div className='webName'>
                    <h1>Twick Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            {/* Right side */}
            <div className='a-right'>
                <form className='info-form authForm' onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign up" : "Log in"}</h3>
                    {
                        isSignUp &&
                        <div>
                            <input type="text" placeholder='First Name' className='infoInput' name='firstName' onChange={handleChange} value={data.firstName} />
                            <input type="text" placeholder='Last Name' className='infoInput' name='lastName' onChange={handleChange} value={data.lastName} />
                        </div>
                    }

                    <div>
                        <input type="text" placeholder='User name' className='infoInput' name='userName' onChange={handleChange} value={data.userName} />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' className='infoInput' name='password' onChange={handleChange} value={data.password} />
                        {isSignUp &&
                            <input type="password" placeholder='Confirm Password' className='infoInput' name='confirm' onChange={handleChange} value={data.confirm} />
                        }

                    </div>
                    <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>
                        * Confirm password is not same
                    </span>
                    <div>
                        <span style={{ fontSize: '12px', cursor: "pointer" }} onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>{isSignUp ? "Already have an account. Login!" : "Don't have an account please Sign up"}</span>
                    </div>
                    <button className='button infoButton' type='submit'>{isSignUp ? "Signup" : "Log in"}</button>

                </form>
            </div>

        </div>
    );
};




export default Auth;