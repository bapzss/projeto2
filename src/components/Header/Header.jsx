import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
    return (
      <header className="header">  
    <nav>
        <img src={Logo} alt="Logo" className="logo" />
    </nav>



        <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/vitrine">VITRINE</Link>
            <Link to="/sobre">SOBRE</Link>
        </div>
        </header>
    );
};

export default Header;