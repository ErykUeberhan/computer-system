import React from 'react'
import './Toolbar.sass'

function Toolbar() {
    return (
        <div className='toolbar'>
            <div className='toolbar-leftshortcuts'></div>
            <div className='toolbar-rightshortcuts'>
                <div className='toolbar-rightshortcuts-links'></div>
                <div className='toolbar-rightshortcuts-settings'></div>
                <div className='toolbar-rightshortcuts-clock'></div>
            </div>
        </div>
    )
}

export default Toolbar
