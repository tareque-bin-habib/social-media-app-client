import React from 'react';
import './Posts.css'
import { PostData } from '../../Data/PostData';
import Post from '../Post/Post';

const Posts = () => {
    return (
        <div className='posts'>
            {
                PostData.map((post, id) => {
                    return <Post data={post} id={id}></Post>
                })
            }
        </div>
    );
};

export default Posts;