import React from 'react'
import SavedShows from '../SavedShows/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-primary-white'>
      <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/3422b161-d409-4979-88fa-9f82ecccb5b0/CO-es-20230123-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/"/>
      <div className='bg-primary-black/60 fixed top-0 left-0 w-full h-[400px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>  
    </div>
    <SavedShows />
    </>
  )
}

export default Account