import React from 'react'
import Home from './Home/Home'
import Row from './Rows/Row'
import requests from './Request'

const HomePage = () => {
    return (
        <>
            <Home />
            <Row title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Row title='Popular' fetchURL={requests.requestPopular} />
            <Row title='Trending' fetchURL={requests.requestTrending} />
            <Row title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row title='Horror' fetchURL={requests.requestHorror} />
        </>
    )
}

export default HomePage