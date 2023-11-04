import React from 'react'
import {  Counter, useDarkMode } from './CounterAppProvider'

export const CounterApp = () => {
  const {isDarkMode , toggleDarkMode} = useDarkMode()

  const {count, changeCount} = Counter()

  return (
    <>
    <div style={{color : isDarkMode ? "red" : "blue"}}>My Theme Color</div>
    <button onClick={()=>toggleDarkMode()}>Change Theme</button>
    <h5>{count}</h5>
    <button onClick={()=>changeCount()}>Change Count</button>
    </>
  )
}
