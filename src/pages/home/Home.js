import React from 'react';
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from '../../components/profileSide/ProfileSide';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <ProfileSide></ProfileSide>
            <PostSide></PostSide>
            <div className='rightSide'>Rightside</div>
        </div>
    );
};

export default Home;