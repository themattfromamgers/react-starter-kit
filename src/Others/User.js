import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function User(){
    const [user, setUser] = useEffect({})
    const { id } = useParams();

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res=> setUser(res.data))
    }, [])
    return(
        <>
        <h3>  </h3>

        <pre>

            {JSON.stringify(user)}
        </pre>
        </>
    )
}

export default User
