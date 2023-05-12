import {useState} from 'react'

import { useUser } from './UserContext'


function Profile() {
    const {user, setUser} = useUser()
    // const data = useTheme()
    const [loading, setLoading] = useState(false)
    const data = useUser()
    
    const handleLoGİN = ()=>{
        setLoading(true)
        setTimeout(()=>{
            setUser({
                id: 1,
                username: 'msven',
                bio: 'lorem ipsum'
            })
            setLoading(false)
        }, 1500)
    }
  return (
    <div>
        
        {!user &&  <button onClick={handleLoGİN}> {loading ? 'loading' : 'Login'} </button>}
        <code> {JSON.stringify(data)} </code>
        </div>
  )
}

export default Profile