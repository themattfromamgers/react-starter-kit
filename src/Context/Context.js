import {ThemeProvider} from './ThemeContext';

import Container from './Container'
import './context.css';
function Context(){
    return(
        <>
            <h1>Context</h1>
                
            <ThemeProvider>
                <Container />
            </ThemeProvider>
        </>
    )
}

export default Context