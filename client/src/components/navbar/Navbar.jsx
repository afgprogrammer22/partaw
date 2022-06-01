import './navbar.scss';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar__logo'>
        Partaw-Association
      </Link>
      <ul className='navbar__links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/students'>Students</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
      <div className='navbar__buttons'>
        <button className='navbar__buttons-login'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
