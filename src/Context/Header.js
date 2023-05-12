
import { useContext } from "react";
import ThemeContext from './ThemeContext'

function Header(){
    const {theme, setTheme} = useContext(ThemeContext)
    return(
        <>
            active theme: {theme}
            <br />
            <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>Deği</button>
        </>
    )
}

export default Header