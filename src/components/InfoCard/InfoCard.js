import React from 'react';
import './InfoCard.css'
import { BsPen } from 'react-icons/bs';


const InfoCard = () => {
    return (
        <div className='infoCard'>
            <div className='infoHead'>
                <h4>Your info</h4>
                <BsPen />
            </div>
            <div className='info'>
                <span>
                    <b>Status</b>
                </span>
                <span>In a relationship</span>
            </div>
            <div className='info'>
                <span>
                    <b>Lives in</b>
                </span>
                <span>Chattogram</span>
            </div>
            <div className='info'>
                <span>
                    <b>Works at</b>
                </span>
                <span>Salsabil Group</span>
            </div>
            <button className='button'>Logout</button>
        </div>
    );
};

export default InfoCard;