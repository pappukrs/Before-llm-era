import {configureStore} from '@reduxjs/toolkit'

import  myCounterReducers  from '../features/counter/counterSlice'
import myUsersSlice  from '../features/users/usersSlice'


const store = configureStore({
    reducer : {
        counter:myCounterReducers,
        users:myUsersSlice
    }
}
)

export default store ;