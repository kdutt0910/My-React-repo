import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const followers = useLoaderData()
    // const [followers, setFollowers] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://api.github.com/users/kdutt1597')
    //             const data = await response.json()
    //             console.log(data);
    //             setFollowers(data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }
    //     fetchData();
    // }, [])
  return (
    <div className='flex text-center text-3xl bg-gray-500 text-white p-4 justify-center flex-col'>
        <img className='mx-auto mt-4 rounded-full' src={followers.avatar_url} alt="avatar" width="200" height="200"/>
        <h2>Github Followers : {followers.followers}</h2>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/kdutt1597');
    const data = await response.json();
    return data;
}