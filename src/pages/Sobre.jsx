import React from 'react';
import './Sobre.css';
import Logo from "../assets/logo.png";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <h1 className="projeto-titulo">
 [Loja de roupa StreetBorn]</h1>

      <img src={Logo} alt="Logo" className='imagem-placeholder' />
      <div className="descricao-projeto">
        <h2> Nossa Trajetória e Aprendizados</h2>

        <div className="bloco-texto">
          <h3>Tema Escolhido e Motivação</h3>
          <p>
            A escolha do nosso tema surgiu de uma vontade genuína de explorar um ramo mais acessível para a criação de um negócio. Acreditamos que este mercado específico oferece uma porta de entrada facilitada para a inovação e o empreendedorismo.
          </p>
        </div>

        <div className="bloco-texto">
          <h3>Marca Própria e Inteligência Artificial</h3>
          <p>
            Um dos nossos objetivos criando essa loja foi desenvolver uma marca própria, o que nos permitiu ter total controle sobre o design e a identidade dos produtos. Para isso, utilizamos ferramentas de inteligência artificial para criar estampas exclusivas, o que não só agregou valor aos nossos produtos, mas também nos proporcionou uma experiência enriquecedora no uso de tecnologias emergentes. Muitas das camisas desse site são camisa de marcas de grife famosas como Louis Vuitton, Ralph Lauren, Diesel, porem, adaptada para ter nossa marca
          </p>
        </div>

        <div className="bloco-texto">
          <h3>Tecnologias e Trabalho em Grupo</h3>
          <p>
            Este projeto foi uma experiência única e muito divertida de aprendizado. No âmbito técnico, conseguimos utilizar e aprimorar nossas habilidades em ReactJS e outras tecnologias front-end. No entanto, o aprendizado mais valioso foi a capacidade de trabalhar em grupo. A colaboração, a divisão de tarefas e a sincronização de esforços foram cruciais para o desenvolvimento bem-sucedido deste projeto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;