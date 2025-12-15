import { Link, NavLink } from 'react-router';
import './Header.css'
import ThemeSwitcher from './ThemeSwitcher';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import LangSwitcher from './LangSwitcher';
import Search from './Search';
import { UserOutlined } from '@ant-design/icons';

const Header = () => {
  const { theme } = useContext(ThemeContext)
  
    return (
      <header style={{ background: theme === "light" ? "#333" : "#222" }}>
        <nav className="main-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/weather">Weather</NavLink>
          <NavLink to="/ref">Ref</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>

        <Search />

        <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>

          <Link to="/register" className='btn'>
            <UserOutlined />
          </Link>

          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </header>
    );
}

export default Header;
