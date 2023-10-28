import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const WeekName = () => {

    const weekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h3>Week Days</h3>
            {
                weekName.map(day => {
                    return <ul>
                        <li>
                            <Link to={`/weekday/${day}`} state={{weekday : day}} >{day}</Link>
                        </li>
                    </ul>
                })
            }
            <button className="btn btn-outline-danger" onClick={goBack}> Go Back</button>
        </div>
    )
}
