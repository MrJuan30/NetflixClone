import React, { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { UserAuth } from '../../context/AuthContext'
import { db } from '../../firebase.config'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movie = ({ item }) => {
    const [Like, setLike] = useState(true)
    const [saved, setSaved] = useState(false)
    const {user} = UserAuth()

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
        if(user?.email) {
            setLike(!Like)
            setSaved(true)
            await updateDoc(movieID, {
                savedShow:arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path,
                })
            })
        } else {
            alert('Please log in to save a movie')
        }
    }

    return (
        <>
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className='absolute flex items-center justify-center top-0 left-0 w-full h-full hover:bg-[#000]/50 opacity-0 hover:opacity-100 text-primary-white'>
                    <p className='white-space-normal text-sm md:text-sm font-bold capitalize'>{item?.title}</p>
                    <p onClick={saveShow}>
                        {Like ? <FaRegHeart className='absolute top-4 left-4 text-primary-white text-xl' /> : <FaHeart className='absolute top-4 left-4 text-primary-white text-xl' />}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Movie