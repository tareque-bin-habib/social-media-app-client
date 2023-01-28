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
            <div className='folowStatus'>
                <hr />
                <div>
                    <div className='follow'>
                        <span>6890</span>
                        <span>Following</span>
                    </div>
                    <div className='vl'></div>
                    <div className='follow'>
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>
                My Profile
            </span>
        </div>
    );
};

export default ProfileCard;