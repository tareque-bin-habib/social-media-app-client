import React from 'react';
import ProfileSide from '../../components/profileSide/ProfileSide';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <ProfileSide></ProfileSide>
            <div className='postSide'>Post</div>
            <div className='rightSide'>Rightside</div>
        </div>
    );
};

export default Home;