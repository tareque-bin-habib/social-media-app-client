import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';

const ProfileSide = () => {
    return (
        <div className='profileSide'>
            <LogoSearch></LogoSearch>
            <ProfileCard></ProfileCard>
        </div>
    );
};

export default ProfileSide;