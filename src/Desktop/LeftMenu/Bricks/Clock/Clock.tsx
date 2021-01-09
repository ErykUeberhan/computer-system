import React, { useEffect, useState } from 'react'
import './Clock.sass'

function Clock() {
    const [date, setDate] = useState(new Date)
    enum WeekDays {
        Monday = 'Monday',
        Tuesday = 'Tuesday',
        Wednesday = 'Wednesday',
        Thursday = 'Thursday',
        Friday = 'Friday',
        Saturday = 'Saturday',
        Sunday = 'Sunday'
    }

    const checkDay = (day: number): string => {
        switch (day) {
            case 1:
                return WeekDays.Monday;
                break;
            case 2:
                return WeekDays.Tuesday;
                break;
            case 3:
                return WeekDays.Wednesday;
                break;
            case 4:
                return WeekDays.Thursday;
                break;
            case 5:
                return WeekDays.Friday;
                break;
            case 6:
                return WeekDays.Saturday;
                break;
            case 7:
                return WeekDays.Sunday;
                break;
            default:
                return '';
        }
    }

    useEffect(() => {
        let interval = setInterval(() => setDate(new Date), 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='clock'>
            <div className='clock-time'>
                <p className='clock-time-hours'>{date.getHours() < 9 ? `0${date.getHours()}` : date.getHours()}</p>
                <p className='clock-time-minutes'>{date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes()}</p>
            </div>
            <p className='clock-day'>{checkDay(date.getDay())}</p>
        </div>
    )
}

export default Clock
