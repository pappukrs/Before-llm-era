import {createSlice} from '@reduxjs/toolkit'




const counterSlice = createSlice({
    name:'counterSlice',
    initialState: {count:0},
    reducers:{
        increment: (state) => {state.count += 1},
        decrement: (state) => {state.count -= 1},
        incrementByAmount: (state,action)=>{state.count += action.payload},
        resetCount : (state)=>{ state.count=0}
    }
})


export const {increment , decrement , incrementByAmount , resetCount} = counterSlice.actions

const myCounterReducers = counterSlice.reducer

export default myCounterReducers;
