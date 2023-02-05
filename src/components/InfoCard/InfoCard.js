import React, { useState } from 'react';
import './InfoCard.css'
import { BsPen } from 'react-icons/bs';
import ProfileModal from '../ProfileModal/ProfileModal';


const InfoCard = () => {

    const [modal, setModal] = useState(false)


    return (
        <div className='infoCard'>
            <div className='infoHead'>
                <h4>Your info</h4>
                <div>
                    <BsPen onClick={() => setModal(true)} />
                    <ProfileModal modal={modal} setModal={setModal}></ProfileModal>
                </div>

            </div>
            <div className='info'>
                <span>
                    <b>Status </b>
                </span>
                <span>In a relationship</span>
            </div>
            <div className='info'>
                <span>
                    <b>Lives in </b>
                </span>
                <span>Chattogram</span>
            </div>
            <div className='info'>
                <span>
                    <b>Works at </b>
                </span>
                <span>Salsabil Group</span>
            </div>
            <button className='button logout-btn'>Logout</button>
        </div>
    );
};

export default InfoCard;