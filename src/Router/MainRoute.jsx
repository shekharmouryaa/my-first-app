import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyHeader from '../Header'
import Card from '../Card'
import PageNotFound from '../PageNotFound'
import { WeekName } from '../WeekName'
import { WeekDay } from '../WeekDay'


const MainRoute = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MyHeader />} />
                    <Route path='/card' element={<Card />} />
                    <Route path='*' element={<PageNotFound />} />
                    <Route path="/weeknamelist" element={<WeekName />} />
                    <Route path="/weekday/:dayname" element={<WeekDay />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default MainRoute