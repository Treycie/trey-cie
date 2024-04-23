import React from 'react'
import Header from '../components/header/Header'
import Marquees from '../components/marquee/Marquee'


const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Header />
            <Marquees />
        </div>
    )
}

export default Home