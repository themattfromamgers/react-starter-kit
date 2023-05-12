import { createContext, useContext, useState} from "react";

const ThemeContext = createContext();

export const TestProvider = ({children})=>{
    const [theme, setTheme] = useState('dasdas')
    const values = {
        theme,
        setTheme
    }

    return (<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>)

}

export const useTest = ()=> useContext(ThemeContext)
