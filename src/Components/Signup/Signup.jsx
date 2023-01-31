import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate('/')
    try {
      await signUp(email, password)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className='w-full h-full'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/3422b161-d409-4979-88fa-9f82ecccb5b0/CO-es-20230123-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
      <div className='bg-primary-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-primary-black/75 text-primary-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-primary-gray rounded' type='email' placeholder='Email' autoComplete='email'/>
              <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-primary-gray rounded' type='password' placeholder='password' autoComplete='current-password'/>
              <button className='bg-primary-red py-3 my-6 rounded font-bold'>Sign Up</button>
              <div className='flex justify-between items-center text-sm text-seconday-gray font-bold'>
                <p><input className='mr-2' type='checkbox'/>Remember me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-seconday-gray'>Already subscribed to NetflixClone?</span>{' '}
                <Link to='/login'>Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup