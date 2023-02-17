import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { uploadImage } from "../../Actions/uploadImage";
// import { updateUser } from "../../Actions/userAction";
import { uploadImage } from '../../actions/uploadAction'
import { updateUser } from '../../actions/userAction'

function ProfileModal({ openModal, setOpenModal, data }) {
    const theme = useMantineTheme();
    const { password, ...other } = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const dispatch = useDispatch();
    const param = useParams();
    const { user } = useSelector((state) => state.authReducer.authData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            event.target.name === 'profileImage' ? setProfileImage(img) : setCoverImage(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let userData = formData
        if (profileImage) {
            const data = new FormData()
            const fileName = Date.now() + profileImage.name
            data.append('name', fileName)
            data.append('file', profileImage)
            userData.profilePicture = fileName
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }

        }
        if (coverImage) {
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append("name", fileName);
            data.append("file", coverImage);
            userData.coverPicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }

        dispatch(updateUser(param.id, userData));
        setOpenModal(false);
    }
    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            size="55%"
            overlayBlur={3}
            opened={openModal}
            onClose={() => setOpenModal(false)}
        >
            <form className="infoForm">
                <h3>Your Info</h3>
                <div>
                    <input
                        className="infoInput"
                        placeholder="First name"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                    <input
                        className="infoInput"
                        placeholder="Last name"
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                </div>
                <div>
                    <input
                        className="infoInput"
                        placeholder="Job"
                        type="text"
                        name="worksAt"
                        onChange={handleChange}
                        value={formData.worksAt}
                    />
                </div>
                <div>
                    <input
                        className="infoInput"
                        placeholder="Lives In"
                        type="text"
                        name="livesIn"
                        onChange={handleChange}
                        value={formData.livesIn}
                    />
                    <input
                        className="infoInput"
                        placeholder="Country"
                        type="text"
                        name="country"
                        onChange={handleChange}
                        value={formData.country}
                    />
                </div>
                <div>
                    <input
                        className="infoInput"
                        placeholder="Relationship Status"
                        type="text"
                        name="relationship"
                        onChange={handleChange}
                        value={formData.relationship}
                    />
                </div>
                <div>
                    Profile Image
                    <input type="file" name="profileImage" onChange={onImageChange} />
                    Cover Image
                    <input type="file" name="coverImage" onChange={onImageChange} />
                </div>
                <button onClick={handleSubmit} style={{ height: "3rem" }} className="button">
                    Update
                </button>
            </form>
        </Modal>
    );
}
export default ProfileModal;