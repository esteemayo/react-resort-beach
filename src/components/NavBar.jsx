import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

import links from 'navData';
import logo from 'images/logo.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='Beach Resort' />
          </Link>
          <button type='button' className='nav-btn' onClick={handleToggle}>
            <FaAlignRight className='nav-icon' />
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
