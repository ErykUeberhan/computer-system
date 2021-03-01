import React from 'react'
import { selectFolderOpen, selectSpotifyOpen, setWindowsOpen } from '../Redux/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import "./Taskbar.sass"
import { RiFolder2Fill, RiFirefoxFill, RiBrushFill, RiBookletFill } from "react-icons/ri";
import { ImSpotify } from 'react-icons/im';

function Taskbar() {
    const dispatch = useDispatch();
    const folderOpen = useSelector(selectFolderOpen);
    const spotifyOpen = useSelector(selectSpotifyOpen);
    return (
        <div className='taskbar'>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <linearGradient id="folder-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7955ab" offset="20%" />
                    <stop stopColor="#d6a6be" offset="80%" />
                </linearGradient>
                <radialGradient id="browser-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#f7c400" offset="20%" />
                    <stop stopColor="#eb203c" offset="80%" />
                </radialGradient>
                <linearGradient id="paint-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#3ca792" offset="20%" />
                    <stop stopColor="#a9565f" offset="80%" />
                </linearGradient>
                <linearGradient id="note-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#33d9ab" offset="20%" />
                    <stop stopColor="#5a89a5" offset="80%" />
                </linearGradient>
                <linearGradient id="spotify-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#5EF56A" offset="30%" />
                    <stop stopColor="#F55D93" offset="90%" />
                </linearGradient>
            </svg>

            <RiFolder2Fill className='taskbar-folder' style={{ fill: "url(#folder-gradient)" }} onClick={() => { dispatch(setWindowsOpen({ folderOpen: !folderOpen })) }} />
            <RiFirefoxFill className='taskbar-folder' style={{ fill: "url(#browser-gradient)" }} />
            <RiBrushFill className='taskbar-folder' style={{ fill: "url(#paint-gradient)" }} />

            <ImSpotify className='taskbar-folder' style={{ fill: "url(#spotify-gradient)" }} onClick={() => { dispatch(setWindowsOpen({ spotifyOpen: !spotifyOpen })) }} />
            <RiBookletFill className='taskbar-folder' style={{ fill: "url(#note-gradient)" }} />
            <RiBookletFill className='taskbar-folder' style={{ fill: "url(#note-gradient)" }} />

            <RiFolder2Fill className='taskbar-folder' style={{ fill: "url(#folder-gradient)" }} />
            <RiFirefoxFill className='taskbar-folder' style={{ fill: "url(#browser-gradient)" }} />
            <RiBrushFill className='taskbar-folder' style={{ fill: "url(#paint-gradient)" }} />

            <RiBookletFill className='taskbar-folder' style={{ fill: "url(#note-gradient)" }} />
            <RiBookletFill className='taskbar-folder' style={{ fill: "url(#note-gradient)" }} />
            <RiBookletFill className='taskbar-folder' style={{ fill: "url(#note-gradient)" }} />

        </div>
    )
}

export default Taskbar
