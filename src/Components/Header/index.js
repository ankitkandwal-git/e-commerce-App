import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'


const Header = () => {
    const navigate = useNavigate();
    const onClickLogout = () => {
        Cookies.remove('jwt_token');
        navigate('/login', {replace: true});
    };
    return (
        <nav className="header-container">
            <div className="header-content">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                     alt="website logo" className="website-logo"/>
            </div>
            <ul className="header-nav-items-container">
                <li className="nav-item">
                    <Link className="header-nav-item" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="header-nav-item" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="header-nav-item" to="/cart">Cart</Link>
                </li>
                <button type="button" className="logout-button" onClick={onClickLogout}>
                    Logout
                </button>
            </ul>
        </nav>
    );
}

export default Header