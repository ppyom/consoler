import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const menu = [
    { name: 'Home', path: '/' },
    { name: 'Make', path: '/edit' },
    { name: 'List', path: '/list' },
  ];
  return (
    <nav className={styles.nav}>
      <ul>
        {menu.map((item, idx) => (
          <li
            key={`nav_menu_${idx}`}
            className={location.pathname === item.path ? styles.selected : ''}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
