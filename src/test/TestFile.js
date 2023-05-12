import { useTest } from "./TestContext";

function TestFile(){
    const {theme, setTheme} = useTest()
    
    return(<h1>{theme}</h1>)
}

export default TestFile