import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data)=> {
        setUsers(data)
        setIsLoading(false)}).catch((e)=> console.log(e))
    }, [])
  return (
    <>
    <div>
        <div>xd</div>
        <h3> {isLoading && <span>Loading...</span>} </h3>
        {users.map((user)=>{
        return <div key={user.id}> {user.name} </div>
        
    })}
    </div>
    </>
  )
}

export default Users