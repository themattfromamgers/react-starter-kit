function Nod(){
    return(
        <>
            <h1>NOD</h1>
            
            <form action="../../post" method="post" 
              className="form">
                <input type="text" name="firstname" placeholder="name" />
            <button type="submit">Bağlan</button>
            </form>
        </>
    )
}

export default Nod