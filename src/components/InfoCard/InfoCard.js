import React, { useEffect, useState } from 'react';
import './InfoCard.css'
import { BsPen } from 'react-icons/bs';
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import * as UserApi from "../../Api/UserRequest";
import * as UserApi from '../../api/UserRequest'
// import { logout } from "../../Actions/AuthAction";
import { logout } from '../../actions/AuthAction'


const InfoCard = () => {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const profileUserId = params.id;

    const [profileUser, setProfileUser] = useState({});
    const { user } = useSelector((state) => state.authReducer.authData);
    console.log(user)
    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                const profileUser = await UserApi.getUser(profileUserId);
                setProfileUser(profileUser.data);
            } else {
                const profileUser = await UserApi.getUser(profileUserId);
                setProfileUser(profileUser.data);
            }
        };
        fetchProfileUser();
    }, [user]);

    const handleLogOut = () => {
        dispatch(logout());
    };

    return (
        <div className='infoCard'>
            <div className='infoHead'>
                <h4>Your info</h4>
                {user._id === profileUserId && (
                    <div>
                        <BsPen style={{ cursor: "pointer" }}
                            onClick={() => {
                                setOpenModal(true);
                            }} />
                        <ProfileModal openModal={openModal}
                            data={user}
                            setOpenModal={setOpenModal}></ProfileModal>
                    </div>
                )}

            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>{profileUser.relationship}</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>{profileUser.livesIn}</span>
            </div>
            <div className="info">
                <span>
                    <b>Job </b>
                </span>
                <span>{profileUser.worksAt}</span>
            </div>
            <button onClick={handleLogOut} className="button l-button">
                Log out
            </button>
        </div>
    );
};

export default InfoCard;