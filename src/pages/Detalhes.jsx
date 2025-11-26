import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./detalhes.css";

export default function Detalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/produtos/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Produto não encontrado");
        }
        return res.json();
      })
      .then((data) => {
        setProduto(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h1>Carregando...</h1>;
  if (!produto) return <h1>Produto não encontrado</h1>;

  return (
    <div className="detalhes-container">
      <img className="detalhes-img" src={produto.imagem} alt={produto.nome} />

      <div className="detalhes-info">
        <h1>{produto.nome}</h1>
        <p className="descricao">{produto.descricao || "Sem descrição disponível."}</p>
        
        <h3>Selecione um tamanho:</h3>
        <div className="tamanhos">
          {produto.tamanho.map((t) => (
            <button key={t} className="btn-tamanho">{t}</button>
          ))}
        </div>

        <strong className="preco">R$ {produto.preco}</strong>

        <button className="btn-criar">Comprar</button>
      </div>
    </div>
  );
}