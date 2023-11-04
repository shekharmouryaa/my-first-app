
import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from './Redux/action';


function App() {

  // const [count , setCount] = useState(0)
  const {count} = useSelector(state => state.counterReducer)
debugger
  const dispatch = useDispatch()


  const increment = ()=>{
    dispatch(incrementAction(count + 1))
    // setCount(count + 1)
  }

  const decrement = ()=>{
    dispatch(decrementAction(count - 1))
    // setCount(count - 1)
  }

  return (
    <>
    <h1>Count Comp 1 : {count}</h1>
    <button className='btn btn-danger' onClick={increment} >INCREASE</button>
    <button className='btn btn-info mx-2' onClick={()=>decrement()} >DECREASE</button>
    </>
  )
  
 
}

export default App;
