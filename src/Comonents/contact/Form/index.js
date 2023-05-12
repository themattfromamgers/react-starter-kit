import { useEffect, useState } from "react";

const initialFormValues = {fullname: '', phone_number:''}
function Form({addContact, contacts}) {
  const [form, setForm] = useState(initialFormValues)

useEffect(()=>{
  setForm(initialFormValues)
},[contacts])

  const onChangeInput = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit =(e)=>{
    e.preventDefault();
    if(form.fullname==='' || form.phone_number===''){
      return false;
    }
    addContact([...contacts, form])

    console.log(form)
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="fullname" value={form.fullname} onChange={onChangeInput} />
        <input name="phone_number"  value={form.phone_number} onChange={onChangeInput}/>
        <button>addd</button>
      </form>
    </>
  )
}

export default Form