import {useState} from 'react';

function List({ contacts }) {
  const [filterText, setFilterText] = useState('');
  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>{
      return item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    })
  })

  console.log(filtered)
  return (
      <>
        <input type="text" 
        placeholder='gir' 
        value={filterText} 
        onChange={(e)=> setFilterText(e.target.value)} />
        
        <ul className='list'>
          <li>xd</li>
          {filtered.map((contact, index)=> {
            return <li key={index}>{ contact.fullname } { contact.phone_number }</li>
          })}
        </ul>
        <button className='btn'>send</button>
        <p> Total: {filtered.length} </p>
      </>
  )
}

export default List