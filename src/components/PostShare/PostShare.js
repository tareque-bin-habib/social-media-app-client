import React, { useRef, useState } from 'react';
import profile from '../../img/profileImg.jpg'
import './PostShare.css'
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CiViewTimeline } from 'react-icons/ci';
import { ImCross } from 'react-icons/im';


const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }

    return (
        <div className='postShare'>
            <img src={profile} alt="" />
            <div>
                <input type="text" placeholder="what's happening" />
                <div className='postOptions'>
                    <div className='option'
                        style={{ color: 'var(--photo)' }}
                        onClick={() => imageRef.current.click()}
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
                    <button className='button ps-button'>
                        Share
                    </button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>

                {
                    image && (
                        <div className='previewImage'>
                            <ImCross />
                        </div>
                    )
                }
            </div>

        </div >
    );
};

export default PostShare;