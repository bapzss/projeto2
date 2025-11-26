import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdicionarProdutos.css";

export default function AdicionarProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  const navigate = useNavigate();

  function adicionarProduto(e) {
    e.preventDefault();

    const novoProduto = {
      id: Date.now().toString(), 
      nome,
      tamanho: ["P", "M", "G", "GG"], 
      preco: Number(preco),
      imagem,
      descricao
    };

    fetch("http://localhost:3001/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoProduto)
    }).then(() => {
      navigate("/"); 
    });
  }

  return (
    <div className="pagina-add">
      <h1>Adicionar Produto</h1>

      <form className="form" onSubmit={adicionarProduto}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="URL da imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          required
        />

        <textarea
          placeholder="Descrição do produto"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <button type="submit" className="btn-salvar">
          Salvar
        </button>
      </form>

    
    </div>
  );
}