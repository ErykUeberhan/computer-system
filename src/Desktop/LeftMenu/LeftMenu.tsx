import React from 'react'
import Calendar from './Bricks/Calendar/Calendar'
import Clock from './Bricks/Clock/Clock'
import Music from './Bricks/Music/Music'
import Search from './Bricks/Search/Search'
import Sliders from './Bricks/Sliders/Sliders'
import Weather from './Bricks/Weather/Weather'
import './LeftMenu.sass'

function LeftMenu() {
    return (
        <div className='leftmenu'>
            <div className='leftmenu-container'>
                <Calendar />
                <Weather />
            </div>
            <Clock />
            <Music />
            <Sliders />
            <Search />
        </div>
    )
}

export default LeftMenu
