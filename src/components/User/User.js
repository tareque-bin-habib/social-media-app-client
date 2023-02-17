import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { followUser, unfollowUser } from '../../Actions/userAction';
import { followUser, unfollowUser } from '../../actions/userAction'
import '../FollowersCard/FollowersCard.css'
const User = ({ person }) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useSelector((state) => state.authReducer.authData)

    const [following, setFollowing] = useState(person.followers.includes(user._id))
    const dispatch = useDispatch()
    const handleFollow = () => {
        console.log(person.followers.includes(user._id))
        following ?
            dispatch(unfollowUser(person._id, user)) :
            dispatch(followUser(person._id, user))
        setFollowing(prev => !prev)

    }
    return (
        <div className="follower">
            <div>
                <img
                    src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "defaultProfile.jpg"}
                    alt='followerImage'
                    className="followerImage"
                />
                <div className="name">
                    <span>{person.firstName}</span>
                    <span>{person.userName}</span>
                </div>
            </div>
            <button onClick={handleFollow} className={following ? "button fc-button unfollowButton" : "button fc-button"}>{following ? "Unfollow" : "Follow"}</button>
        </div>
    );

};

export default User;