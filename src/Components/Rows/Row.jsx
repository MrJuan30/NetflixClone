import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegHeart, FaHeart } from 'react-icons/fa'

const Row = ({ title, fetchURL }) => {

    const [Movies, setMovies] = useState([]);
    const [Like, setLike] = useState(true)

    useEffect(() => {
        axios.get(fetchURL)
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch((err) => console.log(err))
        console.log(Movies)
    }, [fetchURL])




    return (
        <>
            <h2 className='text-primary-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center'>
                <div id={'slider'}>
                    {Movies.map((item, id) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                            <div className='absolute flex items-center justify-center top-0 left-0 w-full h-full hover:bg-primary-black/60 opacity-0 hover:opacity-100 text-primary-white'>
                                <p className='white-space-normal text-sm md:text-sm font-bold capitalize'>{item?.title}</p>
                                <p>
                                    {Like ? <FaRegHeart className='absolute top-4 left-4 text-primary-white text-xl' /> : <FaHeart className='absolute top-4 left-4 text-primary-white text-xl' />}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Row