import React from 'react'
import Calendar from './Bricks/Calendar/Calendar'
import Clock from './Bricks/Clock/Clock'
import './LeftMenu.sass'

function LeftMenu() {
    return (
        <div className='leftmenu'>
            <div className='leftmenu-container'>
                <Calendar />
                <div className='leftmenu-container-weather'></div>
            </div>
            <Clock />
            <div className='leftmenu-music'></div>
            <div className='leftmenu-audio'></div>
            <div className='leftmenu-menu'></div>
        </div>
    )
}

export default LeftMenu
