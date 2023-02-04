import React from 'react';
import FollowersCard from '../FollowersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import './ProfileLeft.css'

const ProfileLeft = () => {
    return (
        <div className='profileSide'>
            <LogoSearch></LogoSearch>
            <InfoCard></InfoCard>
            <FollowersCard></FollowersCard>
        </div>
    );
};

export default ProfileLeft;