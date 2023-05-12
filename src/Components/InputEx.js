import { useEffect, useState } from "react"

function InputEx(){
    const [form, setForm] = useState({name: "", surname:""});
    const [name, setName] = useState("")
    const onCname =(event)=>setName(event.target.value);
    
    return(
        <>
            <h3>My name is {name} </h3>
            <input type="text" value={name} onChange={onCname} />
        </>
    )
}

export default InputEx