import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import type { Post } from '../types'

const fetchPost = async (id: number): Promise<Post> => {
    const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
};

const RandomPost = () => {
    const [postId, setPostId] = useState(0)

    const getRandomPost = () => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        setPostId(randomNum)
    }
    
    const { data: post, isLoading, error } = useQuery({
        queryKey: ['post', postId],
        queryFn: () => fetchPost(postId),
        enabled: !!postId
    });

    return (
        <div className="p-4 flexborder-2 rounded-xl flex-col items-start">
            <button
                onClick={getRandomPost}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold mb-4 cursor-pointer"
            >
                🎲 Get a Random Post
            </button>
            {isLoading && <div>loading...</div>}
            {error && <div>Error Fetching user</div>}
            {post && (
                <div>
                    <h1>{post?.title} | {post.id}</h1>
                    <div >
                        <p>{post.body}</p>
                        <span>Written by: {post.userId}</span>
                    </div>
                </div>
            )}       
        </div>
    )
}

export default RandomPost