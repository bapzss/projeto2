import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Vitrine.css";

export default function Vitrine() {
  const [produtos, setProdutos] = useState([]);

  const [searchParams] = useSearchParams();
  const busca = searchParams.get("busca") || "";

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

    const produtosFiltrados = produtos.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="titulo">Vitrine de Produtos</h1>



      <div className="grid">
         {produtosFiltrados.map((item) => (
          <Link to={`/produtos/${item.id}`} key={item.id} className="card">
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <strong>R$ {item.preco}</strong>
          </Link>
        ))}
      </div>


    </div>
  );
}