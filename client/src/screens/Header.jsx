import "../styles/home.css";
import { Link } from 'react-router-dom';
import {useState} from "react"

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('customer'));

    const handleLogout = () => {
        localStorage.removeItem('customer');
        setIsLoggedIn(false);
    };

  return (
    
    <header className="homepage-header">
    <div className="header-logo">
        <img src="../../images.png" alt="" />
      <a href="#">
        RePurpose <br />
      </a>
    </div>
  <div className="header-icons">
    <div>
      <a href="/">About</a>
    </div>
    {/* Buy link */}
    <div>
      <Link to="/product-list">Buy</Link>
    </div>
    {/* Donate link */}
    <div>
      <a href="#">Donate</a>
    </div>
    <div>
            {isLoggedIn ? (
                <div>
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </div>
            ) : (
                <div>
                    <Link to="/login">Login/SignUp</Link>
                </div>
            )}
        </div>
  </div>
</header>
  );
};

export default Header;



