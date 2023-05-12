import Button from './Button';
import Profile from './Profile';

import {useTheme} from './ThemeContext';

function Container(){
    const {theme} = useTheme()
    console.log(theme)
    return(
        <div className={`App ${theme}`}>
        <p>container</p>
        <Profile />
        <Button />
        </div>
    )

}
export default Container