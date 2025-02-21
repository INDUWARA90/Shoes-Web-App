import React from 'react'
import image from '../../../assets/welcomeImage.jpg'
import { Link } from 'react-router-dom'
function SignIn() {
  return (
    <div className='grid items-center justify-center py-32 px-24'>
      <div className="grid items-center justify-center grid-flow-col gap-10 p-8 rounded-md">

        <img src={image} alt="..." className='w-[600px]' />
        
        <div className="grid grid-flow-row gap-3 items-center justify-center  text-center">

          <h1 className='font-semibold text-5xl mb-10'>Create Account</h1>

          <form  className="items-center justify-center grid gap-4 mb-20">
            <input type="text" className='border-2 border-sky-500 w-[400px] block p-3 rounded-2xl' placeholder='name'  required/>
            <input type="text" className='border-2 border-sky-500 w-[400px] block p-3 rounded-2xl' placeholder='email' required/>
            <input type="text" className='border-2 border-sky-500 w-[400px] block p-3 rounded-2xl' placeholder='password' required/>
            <button className='bg-black p-3 rounded-2xl text-white' type='submit'>Create Account</button>
          </form>
          <h2 className='text-md'>Create a Account ? <Link to='/'><span className='text-gray-500'>Login here</span></Link></h2>
        </div>
         
      </div>
    </div>
  )
}

export default SignIn