import React from 'react'
import LeftMenu from './LeftMenu/LeftMenu'
import './Desktop.sass'
import CenterMenu from './CenterMenu/CenterMenu'
import RightMenu from './RightMenu/RightMenu'
import WindowView from './WindowView/WindowView'
import Spotify from './Spotify/Spotify'
import { useSelector } from 'react-redux'
import { selectFolderOpen, selectSpotifyOpen } from '../Redux/appSlice'

function Desktop() {
    const folderOpen = useSelector(selectFolderOpen);
    const spotifyOpen = useSelector(selectSpotifyOpen);
    return (
        <div className='desktop'>
            <LeftMenu />
            <WindowView appName={'folder'} isOpen={folderOpen} />
            <WindowView appName={'spotify'} component={<Spotify />} isOpen={spotifyOpen} />
            <CenterMenu />
            <RightMenu />
        </div>
    )
}

export default Desktop
