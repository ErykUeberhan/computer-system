import React, { useState, useEffect } from 'react'
import './Music.sass'
import { ImSpotify } from 'react-icons/im';
import { IoIosSkipBackward, IoIosSkipForward, IoIosPlay, IoIosPause } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux'
import { selectTokenSpotify, setSpotifyAPI } from '../../../../Redux/appSlice'

function Music() {
    const [playState, setPlayState] = useState(false);
    const [playPause, setPlayPause] = useState(true);
    const [song, setSong] = useState({
        title: '',
        artist: '',
        cover: '',
        playlist: '',
    });
    const [code, setCode] = useState('');
    const token = useSelector(selectTokenSpotify);
    const dispatch = useDispatch();

    const clientId = '5523ece294ee4a3a9a70b4b288e6994a';
    const clientSecret = '035176ad27ae4e5483e9c83afafbc325';
    const redirectURL = 'http://localhost:3000/callback';

    const Login = () => {
        const scopes = 'user-read-recently-played streaming user-read-private user-read-email user-read-currently-playing user-read-playback-state user-modify-playback-state user-library-read';
        window.location.href = 'https://accounts.spotify.com/authorize?response_type=code&client_id=' + clientId +
            (scopes ? '&scope=' + encodeURIComponent(scopes) : '') + '&redirect_uri=' + encodeURIComponent(redirectURL);
    }

    const _getToken = async () => {
        if (code) {
            const result = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
                },
                body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectURL}`,
            }).then(res => res.json()).then((data) => { if (!token) { dispatch(setSpotifyAPI({ tokenSpotify: data.access_token })) } })
        }
    }

    const getNowSong = async () => {
        const result = await fetch(`https://api.spotify.com/v1/me/player`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            },
        }).then(res => res.json()).then(data => { setSong({ ...song, title: data.item.name, artist: data.item.artists[0].name, cover: data.item.album.images[1].url }) });
    }

    const getRecentlyPlayed = () => {
        fetch(`https://api.spotify.com/v1/me/player/recently-played?limit=1`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(res => res.json()).then((data) => { console.log(data); setSong({ ...song, playlist: data.items[0].context.uri }) })
    }

    const getUserDevices = async () => {
        await fetch(`https://api.spotify.com/v1/me/player/devices`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(res => res.json()).then(data => console.log(data))
    }

    const playbackPause = async () => {
        const device_id = '5012088ddba2f7792fa48f74a2232ed3836149ee';
        await fetch(`https://api.spotify.com/v1/me/player/pause`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    const playbackStartFirst = async () => {
        const device_id = '5012088ddba2f7792fa48f74a2232ed3836149ee';
        await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                context_uri: 'spotify:playlist:1CnMEd3MoVSEM1h1fxgaQT',
            })
        })
    }

    const playbackStart = async () => {
        const device_id = '5012088ddba2f7792fa48f74a2232ed3836149ee';
        await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
    }

    const playbackNext = async () => {
        await fetch(`https://api.spotify.com/v1/me/player/next`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        setTimeout(() => getNowSong(), 200);
    }

    const playbackBackward = async () => {
        await fetch(`https://api.spotify.com/v1/me/player/previous`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        setTimeout(() => getNowSong(), 200);
    }

    useEffect(() => {
        let hash = document.URL.split('=')[1];
        setCode(hash);
        _getToken();
    }, [code]);

    useEffect(() => {
        if (token) setTimeout(() => getRecentlyPlayed(), 200);
    }, [token]);

    useEffect(() => {
        window.onSpotifyWebPlaybackSDKReady = () => {
            console.log('kk')
            const player = new Spotify.Player({
                name: 'Web Playback SDK Quick Start Player',
                getOAuthToken: cb => { cb('BQCrPkpsggj4TArLs-KeFrjjWuJcHySmCma7FBFJ1z7sZGMNDwtOK6aySWgw3UFFVhY7GrLqy5r67Wt7wIWV0cqZIQHoK8h9jGL1j10fKoOiXH6-5VXNFoK_fj9hFh5M6oRQ4q5H5PFcpWGUWRcGhZRwd-U5ZUU0AXI'); }
            });

            // Error handling
            player.addListener('initialization_error', ({ message }) => { console.error(message); });
            player.addListener('authentication_error', ({ message }) => { console.error(message); });
            player.addListener('account_error', ({ message }) => { console.error(message); });
            player.addListener('playback_error', ({ message }) => { console.error(message); });

            // Playback status updates
            player.addListener('player_state_changed', state => { console.log(state); });

            // Ready
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            // Connect to the player!
            player.connect();
        };
    }, [token])

    return (
        <div className='music'>
            {
                token ?
                    <div className='music-loggedin'>
                        <div className='music-loggedin-image' onClick={() => { console.log(token); }}>
                            {
                                song.cover ?
                                    <img src={song.cover} />
                                    :
                                    null
                            }

                        </div>
                        <div className='music-loggedin-info'>
                            <div className='music-loggedin-info-title'>
                                {
                                    song.title.length > 12 ?
                                        <>
                                            <p className='music-loggedin-info-title-textscroll' style={{ animation: `music ${song.title.length * (3 / 4)}s linear infinite` }}>{song.title}</p>
                                            <p className='music-loggedin-info-title-textscrollrepeat' style={{ animation: `musicRepeat ${song.title.length * (3 / 4)}s linear ${song.title.length * ((3 / 4) / 2)}s infinite` }}>{song.title}</p>
                                        </>
                                        :
                                        <p className='music-loggedin-info-title-text' onClick={getRecentlyPlayed}>{song.title}</p>
                                }
                            </div>

                            <div className='music-loggedin-info-player'>
                                <IoIosSkipBackward className='music-loggedin-info-player-backward' onClick={() => { playbackBackward() }} />
                                {
                                    playPause ?
                                        playState ?
                                            <IoIosPlay className='music-loggedin-info-player-play' onClick={() => { playbackStart(); setPlayPause(!playPause); console.log(playState) }} />
                                            :
                                            <IoIosPlay className='music-loggedin-info-player-play' onClick={() => { playbackStartFirst(); setPlayPause(!playPause); setPlayState(true); console.log(playState) }} />

                                        :
                                        <IoIosPause className='music-loggedin-info-player-pause' onClick={() => { playbackPause(); setPlayPause(!playPause) }} />
                                }


                                <IoIosSkipForward className='music-loggedin-info-player-forward' onClick={() => { playbackNext(); getNowSong() }} />
                            </div>
                            <div className='music-loggedin-info-artist' onClick={getUserDevices}>
                                <p className='music-loggedin-info-artist-text'>{song.artist}</p>
                            </div>
                        </div>

                    </div>
                    :
                    <div className='music-loggedout'>
                        <div className='music-loggedout-icon' onClick={() => { getNowSong(); console.log(token) }}>
                            <ImSpotify />
                        </div>
                        <div className='music-loggedout-button' onClick={() => { Login() }}>
                            Log in
                        </div>
                    </div>
            }
        </div >
    )
}


export default Music
