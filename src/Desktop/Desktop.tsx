import React from 'react'
import LeftMenu from './LeftMenu/LeftMenu'
import './Desktop.sass'
import CenterMenu from './CenterMenu/CenterMenu'
import RightMenu from './RightMenu/RightMenu'
import WindowView from './WindowView/WindowView'
import Spotify from './Spotify/Spotify'
import { useSelector } from 'react-redux'
import { selectFolderOpen, selectSpotifyOpen } from '../Redux/appSlice'
import { ImSpotify } from 'react-icons/im';

function Desktop() {
    const folderOpen = useSelector(selectFolderOpen);
    const spotifyOpen = useSelector(selectSpotifyOpen);
    return (
        <div className='desktop'>
            <LeftMenu />
            <WindowView appName={'folder'} isOpen={folderOpen} />
            <WindowView appName={'spotify'} component={<Spotify />} isOpen={spotifyOpen} icon={<ImSpotify style={{ color: '#2ad69b', fontSize: '20px', marginLeft: '10px' }} />} />
            <CenterMenu />
            <RightMenu />
        </div>
    )
}

export default Desktop
