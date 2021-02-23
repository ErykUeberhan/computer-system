import React, { useState } from 'react'
import './Sliders.sass'
import { FiHeadphones, FiSun, FiCpu, FiBatteryCharging } from 'react-icons/fi';

function Sliders() {
    const [volume, setVolume] = useState('50');
    const [brightness, setBrightness] = useState(1);
    const [memory, setMemory] = useState('50');
    const [battery, setBattery] = useState('50');

    const brightnessCheck = (e: any) => {
        let value = parseFloat(e.target.value);
        setBrightness(value)
        console.log(value)
    }

    return (
        <div className='sliders'>
            <div className='screenbright' style={{ background: `rgba(0, 0, 0, ${1 - (brightness + 0.25)})` }}></div>
            <div className='sliders-volume'>
                <FiHeadphones className='sliders-volume-icon' />
                <div className='sliders-volume-level'>
                    <input className='sliders-volume-level-slider' type='range' min='0' max='100' step='1' onChange={(e) => { setVolume(e.target.value) }}></input>
                    <div className='sliders-volume-level-cover' style={{ width: volume + '%' }}></div>
                </div>
            </div>
            <div className='sliders-brightness'>
                <FiSun className='sliders-brightness-icon' />
                <div className='sliders-brightness-level'>
                    <input className='sliders-brightness-level-slider' type='range' min='0.00' max='1' step='0.01' onChange={(e) => brightnessCheck(e)}></input>
                    <div className='sliders-brightness-level-cover' style={{ width: brightness * 100 + '%' }}></div>
                </div>
            </div>
            <div className='sliders-memory'>
                <FiCpu className='sliders-memory-icon' />
                <div className='sliders-memory-level'>
                    <div className='sliders-memory-level-slider'></div>
                    <div className='sliders-memory-level-cover' style={{ width: memory + '%' }}></div>
                </div>
            </div>
            <div className='sliders-battery'>
                <FiBatteryCharging className='sliders-battery-icon' />
                <div className='sliders-battery-level'>
                    <div className='sliders-battery-level-slider'></div>
                    <div className='sliders-battery-level-cover' style={{ width: battery + '%' }}></div>
                </div>
            </div>

        </div >
    )
}

export default Sliders
