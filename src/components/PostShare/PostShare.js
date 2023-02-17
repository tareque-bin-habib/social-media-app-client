import React, { useEffect, useRef, useState } from 'react';
import profile from '../../img/profileImg.jpg'
import './PostShare.css'
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CiViewTimeline } from 'react-icons/ci';
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/uploadAction';
// import * as UserApi from '../../Api/UserRequest.js'
import * as UserApi from '../../api/UserRequest'


const PostShare = () => {
    const loading = useSelector((state) => state.postReducer.uploading)
    const user = useSelector((state) => state.authReducer.authData)

    const [profileUser, setProfileUser] = useState({})
    useEffect(() => {
        const fetchProfileUser = async () => {

            const profileUser = await UserApi.getUser(user.user._id)
            setProfileUser(profileUser.data)

        }
        fetchProfileUser()
    }, [])
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const dispatch = useDispatch()
    const [image, setImage] = useState(null);
    const imageRef = useRef()
    const desc = useRef()
    const onImageChange = (e) => {

        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0]
            setImage(img)
        }
    };

    const reset = () => {
        setImage(null)
        desc.current.value = ""
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const newPost = {
            desc: desc.current.value,
            userId: user.user._id
        }
        if (image) {
            const data = new FormData()
            const fileName = Date.now() + image.name
            data.append("name", fileName)
            data.append("file", image)
            newPost.image = fileName
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
            dispatch(uploadPost(newPost))

        } reset()
    }

    return (
        <div className='postShare'>
            <img src={profile} alt="" />
            <div>
                <input ref={desc} required type="text" placeholder="what's happening" />
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
                    <button className='button ps-button' onClick={handleSubmit}
                        disabled={loading}>

                        {loading ? "Uploading..." : "Share"}
                    </button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>

                {
                    image && (
                        <div className='previewImage'>
                            <ImCross onClick={() => setImage(null)} />
                            <img src={URL.createObjectURL(image)} alt="" />
                        </div>
                    )
                }
            </div>

        </div >
    );
};

export default PostShare;