import React, { useEffect, useState } from 'react'
import List from './list/index'
import Form from './Form/index'
import './style.css'
function Contacts() {
  const [contacts, setContacts] = useState([{
    fullname: 'mehmet',
    phone_number: "23232"
  }, {
    fullname: 'aye',
    phone_number: "23232"
  }])

  useEffect(()=>{
    console.log(contacts)
  }, [contacts])
  return (
   <div className='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
   </div>
  )
}

export default Contacts