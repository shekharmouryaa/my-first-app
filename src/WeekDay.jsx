import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const WeekDay = () => {

    // const param  = useParams()
    const {dayname}  = useParams()
    // const location = useLocation();

// console.log(location);
  return (
    // <h2>WeekDay : {param.dayname} </h2>
    <h2>WeekDay : {dayname} </h2>
    // <h2>WeekDay : {location.state.weekday} </h2>
  )
}
