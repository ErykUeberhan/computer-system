import React, { useState, useEffect } from 'react'
import './Music.sass'
import { ImSpotify } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux'
import { selectTokenSpotify, setSpotifyAPI } from '../../../../Redux/appSlice'

function Music() {
    const [ref_token, setRefToken] = useState();
    const [song, setSong] = useState({
        title: '',
        cover: '',
    });
    const [code, setCode] = useState('');
    const token = useSelector(selectTokenSpotify);
    const dispatch = useDispatch();

    const clientId = '5523ece294ee4a3a9a70b4b288e6994a';
    const clientSecret = '035176ad27ae4e5483e9c83afafbc325';
    const redirectURL = 'http://localhost:3000/callback';



    const Login = () => {
        const scopes = 'user-read-private user-read-email user-read-currently-playing user-read-playback-state';
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
            }).then(res => res.json()).then((data) => { if (!token) { dispatch(setSpotifyAPI({ tokenSpotify: data.access_token })) }; setRefToken(data.refresh_token); console.log(data) })
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
        }).then(res => res.json()).then(data => { setSong({ ...song, title: data.item.name, cover: data.item.album.images[1].url }); console.log(data) });
    }

    useEffect(() => {
        let hash = document.URL.split('=')[1];
        setCode(hash);
        _getToken();
    }, [code]);

    return (
        <div className='music'>
            {
                token ?
                    <div className='music-loggedin'>
                        <div className='music-loggedin-image' onClick={() => { getNowSong(); console.log(song.cover); }}>
                            <img src={song.cover} />
                        </div>
                        <div className='music-loggedin-info'>
                            <div className='music-loggedin-info-title'>
                                {song.title}
                            </div>
                            <div className='music-loggedin-info-player'>
                            </div>
                        </div>

                    </div>
                    :
                    <div className='music-loggedout'>
                        <div className='music-loggedout-icon' onClick={() => { console.log(token) }}>
                            <ImSpotify />
                        </div>
                        <div className='music-loggedout-button' onClick={() => Login()}>
                            Log in
                        </div>
                    </div>
            }
        </div >
    )
}


export default Music
