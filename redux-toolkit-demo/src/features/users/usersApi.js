

export const fetchUsersAPI = async()=>{
   
    let response;

    try {

            response = await fetch('https://jsonplaceholder.typicode.com/users')

           response =  response.json()
    } catch (error) {

        throw new Error("Failed to fetch users")
        
    }

    return response;

}



export const fetchUsersByIdApi = async(id=1)=>{

    let response;
    try {

         response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         response = response.json();
        
    } catch (error) {
                throw new Error("Failed to fetch users by id")

        
    }
    return response;
}