import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'
export default function Counter() {
    const dispatch = useDispatch()
    const value = useSelector(state => state.counter)
    return (
        <div>
            <h1>Redux state counter</h1>
            <div>
                <button style={{padding : '10px', margin : '10px'}} onClick={() => dispatch(increment())}>+</button>
                {value?.value} 
                <button style={{padding : '10px', margin : '10px'}} onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    )
}
