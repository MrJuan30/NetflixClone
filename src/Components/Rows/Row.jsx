import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({ title, fetchURL, rowID }) => {

    const [Movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(fetchURL)
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch((err) => console.log(err))
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <>
            <h2 className='text-primary-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} className='bg-primary-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {Movies.map((item, id) => (
                        <Movie item={item} key={id} />
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className='bg-primary-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            </div>
        </>
    )
}

export default Row