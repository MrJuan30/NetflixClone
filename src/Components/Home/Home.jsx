import { React, useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../Request'
const Home = () => {
    const [Movies, setMovies] = useState([])
    const movie = Movies[Math.floor(Math.random() * Movies.length)]

    useEffect(() => {
        axios
            .get(requests.requestPopular)
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch((err) => console.log(err))
    }, [])

    // console.log(movie)

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...'
        } else {
            return str;
        }
    }


    return (
        <div className='w-full h-[550px] content-center text-primary-white xl:h-[850px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-primary-black xl:h-[850px]' ></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8 gap-4'>
                    <h1 className='text-3xl md:text-5xl font-bold xl:text-6xl'>{movie?.title}</h1>
                    <div className='my-12'>
                        <button className='border bg-primary-white text-primary-black border-primary-white py-2 px-5'>Play</button>
                        <button className='border text-primary-white border-primary-white py-2 px-5 ml-4'>Watch Later</button>
                    </div>
                    <p className='text-primary-white text-sm xl:text-xl'>Released: {movie?.release_date}</p>
                    <br />
                    <p className=' font-thin w-full md:max-w-[70&] lg:max-w-[50%] xl:max-w-[35%] xl:text-xl text-primary-white'>{truncateString(movie?.overview, 150)}</p>
                </div>
            </div>
        </div>
    )
}

export default Home