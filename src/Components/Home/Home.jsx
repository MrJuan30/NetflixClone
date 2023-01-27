import { React, useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../Request'
const Home = () => {
    const [Movies, setMovies] = useState([])
    const movie = Movies[Math.floor(Math.random() * Movies.length - 1)]

    useEffect(() => {
        axios
            .get(requests.requestPopular)
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch((err) => console.log(err))
    }, [])

    console.log(movie)


    return (
        <div className='w-full h-[550px] text-primary-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-primary-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            </div>
        </div>
    )
}

export default Home