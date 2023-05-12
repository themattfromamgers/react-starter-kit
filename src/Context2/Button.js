
import {useTheme} from './ThemeContext'



function Button(){
    const {theme, setTheme} = useTheme()


    return(
        <>
            active theme: {theme}
            <br />
            <button onClick={()=>setTheme(theme==='light' ? 'dark' :'light')}>Değitir</button>
        </>
    )
}

export default Button