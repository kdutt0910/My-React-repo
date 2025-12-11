import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const submitHandler = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div className='flex flex-col w-2xl p-4 gap-2.5'>
        <input type='text' placeholder='Username' className='text-white bg-blue-300 text-3xl p-4 border-2 border-gray-500' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} />
        <input type='text' placeholder='Password' className='text-white bg-blue-300 text-3xl p-4 border-2 border-gray-500' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
        <button className='text-white bg-gray-500 p-4' onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Login