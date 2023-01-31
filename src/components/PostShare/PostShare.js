import React from 'react';
import profile from '../../img/profileImg.jpg'
import './PostShare.css'
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CiViewTimeline } from 'react-icons/ci';


const PostShare = () => {
    return (
        <div className='postShare'>
            <img src={profile} alt="" />
            <div>
                <input type="text" placeholder="what's happening" />
                <div className='postOptions'>
                    <div className='option'
                        style={{ color: 'var(--photo)' }}
                    >
                        <HiOutlinePhotograph className='schedule' />
                        Photo
                    </div>
                    <div className='option'
                        style={{ color: 'var(--video)' }}
                    >
                        <AiOutlinePlayCircle className='schedule' />
                        Video
                    </div>
                    <div className='option'
                        style={{ color: 'var(--location)' }}
                    >
                        <HiOutlineLocationMarker className='schedule' />
                        Location
                    </div>
                    <div className='option'
                        style={{ color: 'var(--shedule)' }}
                    >
                        <CiViewTimeline className='schedule' />
                        Schedule
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostShare;