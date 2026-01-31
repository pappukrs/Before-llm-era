import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { fetchUsersAPI, fetchUsersByIdApi } from './usersApi'




//create thunks for only fetching users of users action 
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async(_ , thunkApi)=>{


        try {

            return await fetchUsersAPI()
            
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)


//craete thunk for the fetching users by id of users action


export const fetchUsersById = createAsyncThunk('users/fetchUsersById',async(_ ,thunkApi)=>{
    try {

        return await fetchUsersByIdApi();
        
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
        
    }
})

const userSlice = createSlice({
    name:'user',
    initialState:{
        data : [],
        selectedUser:null,
        loading:{
            fetchAll:false,
            fetchOne:false
        },
        error:{
            fetchAll:null,
            fetchOne:null,
        }
    },
    reducers:{

    },
    extraReducers:(builder)=>{


        //for fetchall
        builder.addCase(fetchUsers.pending ,(state)=>{
            state.loading.fetchAll = true
            state.error.fetchAll = false

        })
        builder.addCase(fetchUsers.fulfilled , (state,action)=>{
            state.loading.fetchAll = false;
            state.error.fetchAll = false;
            state.data = action.payload
        })

        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading.fetchAll  = false;
            state.error.fetchAll = true
        })


        //for fecth single


        builder.addCase(fetchUsersById.pending ,(state)=>{
            state.loading.fetchOne = true
            state.error.fetchOne = false

        })
        builder.addCase(fetchUsersById.fulfilled , (state,action)=>{
            state.loading.fetchOne = false;
            state.error.fetchOne = false;
            state.selectedUser = action.payload
        })

        builder.addCase(fetchUsersById.rejected,(state,action)=>{
            state.loading.fetchOne  = false;
            state.error.fetchOne = true
        })


    }
})


const myUsersSlice = userSlice.reducer;

export default myUsersSlice