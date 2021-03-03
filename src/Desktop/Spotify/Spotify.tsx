import React, { useState } from 'react'
import './Spotify.sass'
import { IoIosSkipBackward, IoIosSkipForward, IoIosPlay, IoIosPause, IoIosShuffle, IoIosRepeat } from 'react-icons/io';

function Spotify() {
    const [play, setPlay] = useState(false)
    return (
        <div className='spotify'>
            <div className='spotify-body'>
                <div className='spotify-body-playlists'>
                    <p>Playlists</p>
                    <h1>YOUR LIBRARY</h1>
                    <p>playlist_1</p>
                    <p>playlist_2</p>
                    <p>playlist_3</p>
                    <p>playlist_4</p>
                    <p>playlist_5</p>
                    <p>playlist_5</p>
                    <p>playlist_5</p>
                    <p>playlist_5</p>
                </div>
                <div className='spotify-body-songs'>
                    <h1>Playlists</h1>
                    <div className='spotify-body-songs-albums'>
                        <div className='spotify-body-songs-albums-element'>
                            <img src='https://avatarfiles.alphacoders.com/604/thumb-60487.jpg' alt='album' />
                            <p>title</p>
                        </div>
                        <div className='spotify-body-songs-albums-element'>
                            <img src='https://avatarfiles.alphacoders.com/604/thumb-60487.jpg' alt='album' />
                            <p>title</p>
                        </div>
                        <div className='spotify-body-songs-albums-element'>
                            <img src='https://avatarfiles.alphacoders.com/604/thumb-60487.jpg' alt='album' />
                            <p>title</p>
                        </div>
                        <div className='spotify-body-songs-albums-element'>
                            <img src='https://avatarfiles.alphacoders.com/604/thumb-60487.jpg' alt='album' />
                            <p>title</p>
                        </div>
                        <div className='spotify-body-songs-albums-element'>
                            <img src='https://avatarfiles.alphacoders.com/604/thumb-60487.jpg' alt='album' />
                            <p>title</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='spotify-player'>
                <div className="spotify-player-info">

                </div>
                <div className="spotify-player-buttons">
                    <IoIosShuffle className='spotify-player-buttons-shuffle' />
                    <IoIosSkipBackward className='spotify-player-buttons-backward' />
                    <div className='spotify-player-buttons-play' onClick={() => setPlay(!play)}>
                        {
                            play ? <IoIosPlay /> : <IoIosPause />
                        }
                    </div>


                    <IoIosSkipForward className='spotify-player-buttons-forward' />
                    <IoIosRepeat className='spotify-player-buttons-repeat' />
                </div>
                <div className="spotify-player-volume">

                </div>
            </div>
        </div>
    )
}

export default Spotify
