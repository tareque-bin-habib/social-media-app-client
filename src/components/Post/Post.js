import React from 'react';
import './Post.css'

import comment from '../../img/comment.png'
import share from '../../img/share.png'
import heart from '../../img/like.png'
import notLike from '../../img/notlike.png'

const Post = ({ data }) => {
    return (
        <div className='post'>
            <img src={data.img} alt="" />

            <div className='postReact'>
                <img src={data.liked ? heart : notLike} alt="" />
                <img src={comment} alt="" />
                <img src={share} alt="" />

            </div>

            <span style={{ color: 'var(--gray)', fontSize: '15px' }}>{data.likes} likes</span>

            <div className='details'>
                <span><b>{data.name} </b></span>
                <span>{data.desc}</span>
            </div>

        </div>
    );
};

export default Post;