import React, { useState } from 'react'
import './Sliders.sass'
import { FiHeadphones, FiSun, FiCpu, FiBatteryCharging } from 'react-icons/fi';

function Sliders() {
    const [volume, setVolume] = useState('50')
    return (
        <div className='sliders'>
            <div className='sliders-volume'>
                <FiHeadphones className='sliders-volume-icon' />
                <div className='sliders-volume-level'>
                    <input className='sliders-volume-level-slider' type='range' min='0' max='100' step='1' onChange={(e) => { setVolume(e.target.value) }}></input>
                    {console.log(volume)}
                    <div className='sliders-volume-level-cover' style={{ width: volume + '%' }}></div>
                </div>
            </div>
            <div className='sliders-brightness'>
                <span className='sliders-brightness-icon'>
                </span>
                <input className='sliders-brightness-level' type='range'>
                </input>
            </div>
            <div className='sliders-memory'>
                <span className='sliders-memory-icon'>
                </span>
                <input className='sliders-memory-level'>
                </input>
            </div>
            <div className='sliders-battery'>
                <span className='sliders-battery-icon'>
                </span>
                <input className='sliders-battery-level'>
                </input>
            </div>
        </div>
    )
}

export default Sliders
