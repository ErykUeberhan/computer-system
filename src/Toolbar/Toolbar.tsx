import React from 'react'
import './Toolbar.sass'
import Watch from './Watch/Watch'
import Settings from './Settings/Settings'

function Toolbar() {
    return (
        <div className='toolbar'>
            <div className='toolbar-leftshortcuts'></div>
            <div className='toolbar-rightshortcuts'>
                <div className='toolbar-rightshortcuts-links'></div>
                <Settings />
                <Watch />
            </div>
        </div>
    )
}

export default Toolbar
