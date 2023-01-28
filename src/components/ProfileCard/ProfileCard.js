import React from 'react';
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <div className='profileCard'>
            <div className='profileImages'>
                <img src={cover} alt="" />
                <img src={profile} alt="" />
            </div>
            <div className='profileName'>
                <span>Zendya MJ</span>
                <span>Senior UI/UX Designer</span>
            </div>
        </div>
    );
};

export default ProfileCard;