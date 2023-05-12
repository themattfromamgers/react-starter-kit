import { useContext } from "react";
import ThemeContext from './ThemeContext'
function Button(){
    const data = useContext(ThemeContext)
    const {theme, setTheme} = useContext(ThemeContext)
    console.log(data)


    return(
        <>
            active theme: {theme}
            <br />
            <button onClick={()=>setTheme(theme==='light' ? 'dark' :'light')}>Değitir</button>
        </>
    )
}

export default Button