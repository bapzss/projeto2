import "./Home.css"

const PaginaPrincipal = (props) =>{
    return(
    <div>
       <div className="destaques">
        <h1>Confira nossos destaques</h1> 
        </div>

        <div className="imagens">
            <img src="../../public/img/varsity.png" alt="" /> 
            <img src="../../public/img/jaqueta.png" alt="" />
            <img src="../../public/img/corrida.png" alt="" />
        </div>
    </div>
    )
}

export default PaginaPrincipal 
