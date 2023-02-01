import React from 'react'
import Home from './Home/Home'
import Row from './Rows/Row'
import requests from './Request'

const HomePage = () => {
    
    return (
        <>
            <Home />
            <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
            <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
        </>
    )
}

export default HomePage