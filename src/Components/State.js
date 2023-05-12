import { useState, useEffect } from "react"

function State(){

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("murat");

    useEffect(()=>{
        console.log('Component maunt')
        const intv = setInterval(()=>{
            setNumber((n)=> n+1)
        }, 1000)
        return ()=> clearInterval(intv)
    },[])

    useEffect(()=>{
        console.log('Number State güncellendi')
    }, [number])

    // useEffect(()=>{
    //     console.log('Name State güncellendi')
    // }, [name])

    // useEffect(()=>{
    //     console.log('Number State güncellendi')
    // }, [number, name])
    return(
        <>
            <h1> {number} </h1>
            <button onClick={()=> setNumber(number+1)}>Click</button>
            <h1> {name} </h1>
            <button onClick={()=> setName("BURAK")}>Click</button>
        </>
    )
}

export default State