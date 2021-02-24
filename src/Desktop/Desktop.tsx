import React from 'react'
import LeftMenu from './LeftMenu/LeftMenu'
import './Desktop.sass'
import CenterMenu from './CenterMenu/CenterMenu'
import RightMenu from './RightMenu/RightMenu'
import WindowView from './WindowView/WindowView'

function Desktop() {
    return (
        <div className='desktop'>
            <LeftMenu />
            <WindowView />
            <CenterMenu />
            <RightMenu />
        </div>
    )
}

export default Desktop
