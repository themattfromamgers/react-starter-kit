import React, { useCallback, useState } from "react";
import Header from './Comp/Header'
import Context from './Context/Context'
import { ThemeProvider } from "./Context2/ThemeContext";
import { UserProvider } from "./Context2/UserContext";
import Container from "./Context2/Container";

import style from './style.module.css';
import styles from './Style.module.scss'



function App2() {

  const myStyle = {
    backgroundColor: "DodgerBlue"
  }

  const [number, setNumber] = useState(0)
  
  // const data = useMemo(()=>{
  //   return [{name: 'mehmet', number}]
  // }, [number])

  const inc = useCallback(()=>{
    setNumber((numbers)=> numbers+1)
  },[])
  return (
    <div className="App"> 
      

      <h1> {number} </h1>
      
      <Header inc={inc} />
      <hr />

      <Context />


      <hr />
<h3>context 2</h3>
<ThemeProvider>

      <UserProvider>
        <Container />
      </UserProvider>
</ThemeProvider>
      <hr />


      <hr />

      <div className={style.container}>
        <div className={style.item}>XD 1</div>
        <div className={style.item}>XD 2</div>
        <div className={style.item}>XD 3</div>
      </div>

      <h1 className={styles.ornek}>SCSS MODULE</h1>

      <h1 style={myStyle}>MYSTYLE</h1>

    </div>
  );
}

export default App2;
