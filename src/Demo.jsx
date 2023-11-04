import React from 'react'
import { useSelector } from 'react-redux'

const Demo = () => {

    const {count} = useSelector(state => state.counterReducer)

    debugger
  return (
    <div>
          <h1>Demo Comp 2 : {count}</h1>
    </div>
  )
}

export default Demo