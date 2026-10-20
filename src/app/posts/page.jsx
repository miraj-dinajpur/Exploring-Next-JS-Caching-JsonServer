import React from 'react';

const getPosts = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

const getPosts2 = async () =>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        return res.json()
    }
    catch (error) { 
        throw new Error('Failed to fetch posts')
    }
}
const getPosts3 = async () =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!res.ok) {
            throw new Error('Failed to fetch posts')
        }

    
}

const Postpage = async() => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const posts = await res.json()

    const posts = await getPosts()


    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Posts Page</h2>
            <h2 className="text-2xl font-bold mb-4">Total Posts: {posts.length}</h2>
        </div>
    );
};

export default Postpage;