import React from 'react'
import './Settings.sass'
import { RiWifiFill } from "react-icons/ri";
import { IoMdEyeOff } from "react-icons/io";
import { BsPlug } from "react-icons/bs";

function Settings() {
    return (
        <div className='settings'>
            <RiWifiFill className='settings-wifi' />
            <IoMdEyeOff className='settings-eye' />
            <BsPlug className='settings-plug' />
        </div>
    )
}

export default Settings
