import {useContext} from 'react'
import ButtonCon from "./Button"
import Header from './Header';

import ThemeContext from './ThemeContext';

function Container(){
    const {theme} = useContext(ThemeContext)
    console.log(theme)
    return(
        <div className={`App ${theme}`}>
        <ButtonCon />
        <hr />
        <Header />
        </div>
    )

}
export default Container