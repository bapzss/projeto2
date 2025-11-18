import "./Home.css"
const PaginaPrincipal = (props) =>{
    return(
       <div className="ContainerHome">
        <div>
        <h1><strong>{props.Mensagem}</strong></h1> 
            <div id="ProdutosHome">
        <img src={props.ProdutoInicial1} alt="" className="ProdutoInicial" /> 
        <img src={props.ProdutoInicial2} alt="" className="ProdutoInicial" /> 
        <img src={props.ProdutoInicial3} alt="" className="ProdutoInicial" /> 
            </div>
        </div>
        </div> 
    )
}

export default PaginaPrincipal 
