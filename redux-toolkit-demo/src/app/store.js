import {configureStore} from '@reduxjs/toolkit'

import  myCounterReducers  from '../features/counter/counterSlice'


const store = configureStore({
    reducer : {
        counter:myCounterReducers
    }
})

export default store;
