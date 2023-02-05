import React, { useState } from 'react';
import './RightSide.css'
import home from '../../img/home.png'
import noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import { FiSettings } from 'react-icons/fi';
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';



const RightSide = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className='rightSide'>
            <div className='navIcon'>
                <img src={home} alt="" />
                <FiSettings className='setting' />
                <img src={noti} alt="" />
                <img src={comment} alt="" />
            </div>

            <TrendCard></TrendCard>

            <button className='button r-button' onClick={() => setModal(true)} >

                Share
            </button>
            <ShareModal modal={modal} setModal={setModal}></ShareModal>

        </div >
    );
};

export default RightSide;