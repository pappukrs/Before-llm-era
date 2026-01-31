import {React} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement,incrementByAmount,resetCount } from './counterSlice';



const Counter = ()=>{

    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

    console.log("count",count)
    return (
        <div>
            <h1>Counter</h1>
            <h1>count: {count}</h1>

            <button onClick = {()=>{dispatch(increment())}}>+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
            <button onClick={()=>{dispatch(incrementByAmount(5))}}>+5</button>
            <button onClick={()=>{dispatch(resetCount())}}></button>

        </div>
    )

}


export default Counter;