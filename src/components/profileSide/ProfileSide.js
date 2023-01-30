import React from 'react';
import FollowersCard from '../FollowersCard/FollowersCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import './ProfileSide.css'

const ProfileSide = () => {
    return (
        <div className='profileSide'>
            <LogoSearch></LogoSearch>
            <ProfileCard></ProfileCard>
            <FollowersCard></FollowersCard>
        </div>
    );
};

export default ProfileSide;