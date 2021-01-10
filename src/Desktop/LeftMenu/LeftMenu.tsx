import React from 'react'
import Calendar from './Bricks/Calendar/Calendar'
import Clock from './Bricks/Clock/Clock'
import Music from './Bricks/Music/Music'
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
            <div className='leftmenu-audio'></div>
            <div className='leftmenu-menu'></div>
        </div>
    )
}

export default LeftMenu
