import React from 'react'
import './Music.sass'
import { ImSpotify } from 'react-icons/im';

function Music() {
    return (
        <div className='music'>
            <div className='music-loggedin'>
                Logged in
            </div>
            <div className='music-loggedout'>
                <div className='music-loggedout-icon'>
                    <ImSpotify />
                </div>
                <div className='music-loggedout-button'>
                    Log in
                </div>
            </div>
        </div>
    )
}

export default Music
