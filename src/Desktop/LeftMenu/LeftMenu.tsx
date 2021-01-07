import React from 'react'
import Clock from './Bricks/Clock'
import './LeftMenu.sass'

function LeftMenu() {
    return (
        <div className='leftmenu'>
            <div className='leftmenu-container'>
                <div className='leftmenu-container-calendar'></div>
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
