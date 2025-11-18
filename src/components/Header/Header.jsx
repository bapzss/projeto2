import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/vitrine">Vitrine</Link>
        </nav>
    );
};

export default Header;