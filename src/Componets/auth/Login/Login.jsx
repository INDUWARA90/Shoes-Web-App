import React, { useState } from 'react'
import image from '../../../assets/welcomeImage.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Data from '../../Data/Data';

function Login() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const check = (userName, password) => {
    const user = Data.find(user => user.username === userName);

    if (user) {
      if (user.password === password) {
        (user.username.startsWith('admin')) ? navigate('/admin-dashBoard') : navigate('/home');
      } else {
        console.log('Incorrect password');
      }
    } else {
      console.log('User 404 Error');
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    check(username, password);
    setPassword('');
  }

  return (
    <div className='grid items-center justify-center py-32 px-24'>
      <div className="grid items-center justify-center grid-flow-col gap-10 p-8 rounded-md">

        <div className="grid grid-flow-row gap-3 items-center justify-center  text-center">

          <h1 className='font-semibold text-5xl'>Welcome Back !</h1>

          <p className=' w-[450px] text-center font-medium text-gray-600 mb-9'>The login page provides secure access for users by entering a username/email and password. It includes options for account recovery, new user sign-up, and ensures a user-friendly, intuitive experience.</p>

          <form onSubmit={onSubmit} className="items-center justify-center grid gap-4 mb-20">
            <input
              type="text"
              className='border-2 border-sky-500 w-[400px] block p-3 rounded-2xl'
              placeholder='username'
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              type="password" // Change input type to password
              className='border-2 border-sky-500 w-[400px] block p-3 rounded-2xl'
              placeholder='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='bg-black p-3 rounded-2xl text-white' type='submit'>Login</button>
          </form>

          <h2 className='text-md'>Not a User? <Link to='/signIn'><span className='text-gray-500'>Register Now</span></Link></h2>
        </div>

        <img src={image} alt="Welcome" className='w-[600px]' />

      </div>
    </div>
  )
}

export default Login;
