import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../../context/AuthContext'
import { db } from '../../firebase.config'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'

const SavedShows = () => {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth()

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
         setMovies(doc.data()?.savedShows);
        });
       }, [user?.email]);
    
       console.log(movies);

  return (
    <>
        <h2 className='text-primary-white font-bold md:text-xl p-4'>My Shows</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-primary-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies?.map((item, id) => (
                    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                        <div className='absolute flex items-center justify-center top-0 left-0 w-full h-full hover:bg-[#000]/50 opacity-0 hover:opacity-100 text-primary-white'>
                            <p className='white-space-normal text-sm md:text-sm font-bold capitalize'>{item?.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-primary-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        </div>
    </>
  )
}

export default SavedShows