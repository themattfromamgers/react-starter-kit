import React from "react"

function Header({inc, data}){
    console.log('HEADER')
    return(
        <>
            <p>HEA</p>
            <button onClick={inc}>Click</button>
            <code> {JSON.stringify(data)} </code>
        </>
    )
}

export default React.memo(Header)