import React from 'react';
import profile from '../../img/profileImg.jpg'
import './PostShare.css'
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GrFormSchedule } from 'react-icons/gr';


const PostShare = () => {
    return (
        <div className='postShare'>
            <img src={profile} alt="" />
            <div>
                <input type="text" placeholder="what's happening" />
            </div>
            <div className='postOptions'>
                <div className='option'>
                    <HiOutlinePhotograph />
                    Photo
                </div>
                <div className='option'>
                    <AiOutlinePlayCircle />
                    Video
                </div>
                <div className='option'>
                    <HiOutlineLocationMarker />
                    Location
                </div>
                <div className='option'>
                    <GrFormSchedule />
                    Schedule
                </div>
            </div>
        </div>
    );
};

export default PostShare;