import React, { useState } from 'react'
import './Calendar.sass'

function Calendar() {
    const [date, setDate] = useState(new Date)

    enum Months {
        January = 'Jan',
        February = 'Feb',
        March = 'Mar',
        April = 'Apr',
        May = 'May',
        June = 'Jun',
        July = 'Jul',
        August = 'Aug',
        September = 'Sep',
        October = 'Oct',
        November = 'Nov',
        December = 'Dec'
    }

    const CheckMonth = (month: number): string => {
        switch (month) {
            case 0:
                return Months.January;
                break;
            case 1:
                return Months.February;
                break;
            case 2:
                return Months.March;
                break;
            case 3:
                return Months.April;
                break;
            case 4:
                return Months.May;
                break;
            case 5:
                return Months.June;
                break;
            case 6:
                return Months.July;
                break;
            case 7:
                return Months.August;
                break;
            case 8:
                return Months.September;
                break;
            case 9:
                return Months.October;
                break;
            case 10:
                return Months.November;
                break;
            case 11:
                return Months.December;
                break;
            default:
                return '';
        }
    }
    return (
        <div className='calendar'>
            <div className='calendar-day'>{date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}</div>
            <div className='calendar-month'>{CheckMonth(date.getMonth())}</div>
        </div>
    )
}

export default Calendar
