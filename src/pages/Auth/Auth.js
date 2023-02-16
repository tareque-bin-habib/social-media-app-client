import React, { useState } from 'react';
import './Auth.css'
import logo from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(true)
    console.log(loading)
    const [data, setData] = useState({ firstname: "", lastname: "", username: "", password: "", confirm: "" })

    const [confirmPass, setConfirmpass] = useState(true)


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isSignUp) {
            data.password === data.confirm ? dispatch(signUp(data)) : setConfirmpass(false)
        }
        else {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setConfirmpass(true)
        setData({ firstname: "", lastname: "", username: "", password: "", confirm: "" })
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
                            <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange} value={data.firstname} />
                            <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange} value={data.lastname} />
                        </div>
                    }

                    <div>
                        <input type="text" placeholder='User name' className='infoInput' name='username' onChange={handleChange} value={data.username} />
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
                    <button className='button infoButton' type='submit' disabled={loading}>{loading ? "Loading.." : isSignUp ? "Signup" : "Log in"}</button>

                </form>
            </div>

        </div>
    );
};




export default Auth;