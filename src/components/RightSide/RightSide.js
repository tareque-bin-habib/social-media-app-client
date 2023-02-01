import React from 'react';
import './RightSide.css'
import home from '../../img/home.png'
import noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import { FiSettings } from 'react-icons/fi';
import TrendCard from '../TrendCard/TrendCard';



const RightSide = () => {
    return (
        <div className='rightSide'>
            <div className='navIcon'>
                <img src={home} alt="" />
                <FiSettings className='setting' />
                <img src={noti} alt="" />
                <img src={comment} alt="" />
            </div>

            <TrendCard></TrendCard>

        </div >
    );
};

export default RightSide;