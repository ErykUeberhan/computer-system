import React from 'react'
import LeftMenu from './LeftMenu/LeftMenu'
import './Desktop.sass'
import CenterMenu from './CenterMenu/CenterMenu'
import RightMenu from './RightMenu/RightMenu'

function Desktop() {
    return (
        <div className='desktop'>
            <LeftMenu />
            <CenterMenu />
            <RightMenu />
        </div>
    )
}

export default Desktop
