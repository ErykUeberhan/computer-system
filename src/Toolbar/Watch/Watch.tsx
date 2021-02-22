import React, { useState, useEffect } from 'react'
import './Watch.sass'
import { FiClock } from 'react-icons/fi';

function Watch() {
    const [date, setDate] = useState(new Date)

    useEffect(() => {
        let interval = setInterval(() => setDate(new Date), 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className='watch'>
            <FiClock />
            {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                :
            {date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
        </div>
    )
}

export default Watch
