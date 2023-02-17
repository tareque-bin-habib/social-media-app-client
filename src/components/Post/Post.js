import React, { useState } from "react";
import "./Post.css";
import comment from "../../img/comment.png";
import Share from "../../img/share.png";
import like from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
// import { likePost } from "../../Api/PostRequest";
import { likePost } from '../../api/PostRequest'

const Post = ({ post }) => {

    const { user } = useSelector((state) => state.authReducer.authData);
    const [likes, setLikes] = useState(post.likes.length);

    const [liked, setLiked] = useState(post.likes.includes(user._id));
    const { image, name, desc } = post;
    const handleLike = () => {
        setLiked(prev => !prev)
        likePost(post._id, user._id)
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    }

    return (
        <div className="post">
            <img
                src={image ? process.env.REACT_APP_PUBLIC_FOLDER + image : ""}
                alt=""
            />
            <div className="postReact">
                <img
                    src={likes ? like : NotLike}
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={handleLike}
                />
                <img src={comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span>{likes}Likes</span>
            <div className="detail">
                <span>
                    <b>{name}</b>
                </span>
                <span>{desc}</span>
            </div>
        </div>
    );
};

export default Post;