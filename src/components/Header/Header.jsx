import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  const [termo, setTermo] = useState("");
  const navigate = useNavigate();

  function buscar(e) {
    e.preventDefault();


    navigate(`/vitrine?busca=${termo}`);
  }

  return (
    <header className="header">  
      <nav className="nav-logo">
        <img src={Logo} alt="Logo" className="logo" />
      </nav>

      
      <form className="form-busca" onSubmit={buscar}>
        <input
          type="text"
          placeholder="Buscar produto..."
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
        />
      </form>

      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/vitrine">VITRINE</Link>
        <Link to="/sobre">SOBRE</Link>
        <Link to="/adicionar">ADICIONAR PRODUTOS</Link>
      </div>
    </header>
  );
};

export default Header;