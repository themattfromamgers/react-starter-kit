import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Users() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
      axios('https://jsonplaceholder.typicode.com/users')
      .then((res)=> setUsers(res.data))

    },[])
  return (
    <>
    <ul>
      {users.map((user)=>{
        return <li key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
  
      })}
    </ul>
    </>

  )
}

export default Users