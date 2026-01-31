import React, { useEffect } from "react"

import  {useSelector , useDispatch} from 'react-redux';
import { fetchUsers ,fetchUsersById} from "./usersSlice";

const Users = ()=>{

const { data,loading,error,selectedUser} = useSelector((state)=>(state.users));
const dispatch = useDispatch();


useEffect(()=>{

    dispatch(fetchUsers())

},[dispatch])



const handleClick = (id)=>{
    dispatch(fetchUsersById(id))

    console.log("selectedUser",selectedUser)
}


console.log("data",data)


if(loading.fetchAll) return <h1>Loading</h1>
if (error.fetchAll) return <h1>Error</h1>


if(loading.fetchOne) return <h1>Loading</h1>
if(loading.fetchOne) return <h1>Error</h1>
    
    return (
        <div>
            <h1>Hello from Users component</h1>
            {
               data?.map((user)=>(<li key ={user.id}>{user.name}</li>))
            }



            <button onClick={()=>(handleClick(1))}></button>
        </div>
    )
}

export default Users;
