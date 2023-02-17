import React, { useState } from 'react';
import TrendData from '../../Data/TrendData';
import ShareModal from '../ShareModal/ShareModal';
import './TrendCard.css'
const TrendCard = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className='trendCard'>
            <h3>Trends for you</h3>
            {
                TrendData.map((trend, id) => {
                    return (
                        <div className='trend'>
                            <span>#{trend.name}</span>
                            <span>{trend.share}k shares</span>
                        </div>
                    )
                })
            }
            <button className='button r-button' onClick={() => { setOpenModal(true) }}>Share</button>
            <ShareModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    );
};

export default TrendCard;