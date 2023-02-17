import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
import * as UserApi from '../../api/UserRequest'
import { Link, useLocation } from 'react-router-dom';

const ProfileCard = () => {
    const { user } = useSelector((state) => state.authReducer.authData)
    console.log(user)
    const [profileUser, setProfileUser] = useState({})
    console.log(user)
    useEffect(() => {
        const fetchProfileUser = async () => {

            const updatedUser = await UserApi.getUser(user._id)
            setProfileUser(updatedUser.data)
            console.log(profileUser)

        }
        fetchProfileUser()
    }, [user])
    const posts = useSelector((state) => state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className='profileCard'>
            <div className='profileImages'>
                <img style={{ height: '10rem' }} src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt="" />
                <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.jpg"} alt="" />
            </div>
            <div className='profileName'>
                <span>{user.firstName} {user.lastName}</span>
                <span>{profileUser.worksAt}</span>
            </div>
            <div className='folowStatus'>
                <hr />
                <div>
                    <div className='follow'>
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                    <div className='vl'></div>
                    <div className='follow'>
                        <span>{user.following.length}</span>
                        <span>Followings</span>
                    </div>
                    {
                        useLocation === 'profilePage' && <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>{posts.filter((post) => post.userId === user._id).length}</span>
                                <span>Posts</span>
                            </div>
                        </>
                    }
                </div>
                <hr />
            </div>
            {
                useLocation === 'profilePage' ? '' : <span>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/profile/${user._id}`}>My Profile</Link>
                </span>
            }

        </div>
    );
};

export default ProfileCard;