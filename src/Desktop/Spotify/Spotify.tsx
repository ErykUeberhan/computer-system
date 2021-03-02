import React from 'react'
import './Spotify.sass'

function Spotify() {
    return (
        <div className='spotify'>
            <div className='spotify-body'>
                <div className='spotify-body-playlists'>
                    <p>PLAYLISTS</p>
                </div>
                <div className='spotify-body-songs'>

                </div>
            </div>
            <div className='spotify-player'></div>
        </div>
    )
}

export default Spotify
