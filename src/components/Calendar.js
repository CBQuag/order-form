
import OrderContext from '../context/OrderContext'
import './Calendar.css'
import { useState, useContext, useEffect } from 'react'

export default function Calendar() {
    
    const intensity = 2
    const rgb = [60, 0, 140];
    const dayColor = '';
    
    const [dayList, setDayList] = useState([])
    const [monthChange, changeMonth] = useState(0)
    const { orderData, orders, total, daySelection, setDayView, datediff, viewMode } = useContext(OrderContext)
    
    //gets the total number of days in given month by finding the 0th day of the next month
    //(the last day of the current month)
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    const calendarMode = (colorNum) => {
        return viewMode == 'light'||!viewMode ?
            `rgb(${256 - (colorNum * ((256 - rgb[0]) / 256)) * intensity}, 
                 ${256 - (colorNum * ((256 - rgb[1]) / 256)) * intensity}, 
                 ${256 - (colorNum * ((256 - rgb[2]) / 256)) * intensity})` :
            `rgb(${rgb[0] + (colorNum * ((256 - rgb[0]) / 256)) * intensity}, 
                 ${rgb[1] + (colorNum * ((256 - rgb[1]) / 256)) * intensity},
                 ${rgb[2] + (colorNum * ((256 - rgb[2]) / 256)) * intensity})`;
    }
    
    const drawCalendar = (dateInt) => {

        //converting the milliseconds into more usable numbers
        const date=new Date(dateInt)
        const year = date.getFullYear();
        const month = date.getMonth();
        const monthTotal = daysInMonth(year, month + 1);
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month, monthTotal);
        const lastMonth = daysInMonth(year, month);
        
        let days = [];
        
        //finds the first day of the last month that shows up in the current month's calendar view
        const carryOver = lastMonth - firstDay.getDay() + 1;
        
        //fills in this month with last month's carry over days
         for (let x = carryOver; x <= lastMonth; x++){
            const oneDay = new Date(year, month-1, x)
            days.push({ day: oneDay, color: ['black','gray',`none`] })
         }
        
        //fills in the current month's days
        for (let x = 1; x <= monthTotal; x++){
            const oneDay = new Date(year, month, x)
            
            //takes an array of every order on a day and reduces the total quantity to one number
            const colorNum =
                [...orderData.filter(
                ord =>datediff(oneDay.getTime(), ord.date) == 0)]
                    .reduce(
                        (sum, a) => sum + a.quantity, 0);

            days.push({
                day: oneDay,
                color: [
                    calendarMode(colorNum)
                    ,
                    `${dayColor}`,
                    //adds border to days with data
                    colorNum > 0 ? `2px solid black` : 'none']
            })
            
        }
        //adds in trailing days
        for (let x = 1; x < 7 - lastDay.getDay(); x++){
            const oneDay = new Date(year, month, x)
            days.push({ day: oneDay, color: ['black', 'gray','none'] })
        }
        setDayList(days)
        
    }
    
    const handleDayClick = (day) => {
        if (!daySelection || day != daySelection) {
            setDayView(day)
        } else {
            setDayView(null)
        }
    }

    //draws calendar
    useEffect(() => {
        drawCalendar(Date.now())    
    },[total])
    
    //changes month and redraws calendar
    useEffect(() => {
        const dateObj = new Date();
        const changedDate = new Date(dateObj.getFullYear(), dateObj.getMonth() + monthChange, 1)
        drawCalendar(changedDate.getTime())    
    }, [monthChange])
    
    return (
        
        <div className="calendar">
            <div className='month-area'>
                <button
                    onClick={() => changeMonth(monthChange - 1)}
                    className='navigation nav-left'>◀  
                </button>
                <h2>{dayList[10]?monthNames[dayList[10].day.getMonth()]:null}</h2>
                <button
                    onClick={() => changeMonth(monthChange + 1)}
                    className='navigation nav-right'>▶
                </button>
            </div>
            <div className='day-area'>
                {dayList? dayList.map((day, index) => (
                    <div className='day'
                        key={index}
                        onClick={()=>handleDayClick(day.day.getTime())}
                        style={{
                            backgroundColor:day.color[0],
                            color:day.color[1],
                            outline:!daySelection?day.color[2]:datediff(day.day,daySelection)==0?`2px solid black`:null
                        }}>
                        {day.day.getDate()}
                    </div>)) : null}
            </div>
        </div>

    )
}