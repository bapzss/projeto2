import { useEffect, useState } from "react";
import "./Vitrine.css";   

export default function Vitrine() {
    const [produtos, setProdutos] = useState([]);

 useEffect(() => {
      fetch("http://localhost:3001/produtos")
    .then((res) => res.json())
    .then((data) => setProdutos(data));
}, []);

return (
    <div className="container">
      <h1 className="titulo">Vitrine de Produtos</h1>

      <div className="grid">
        {produtos.map((item) => (
          <div key={item.id} className="card">
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <strong>R$ {item.preco}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}