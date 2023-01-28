import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';

const Row = ({ title, fetchURL }) => {

    const [Movies, setMovies] = useState([]);


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
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {Movies.map((item, id) => (
                        <Movie item={item} key={id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Row