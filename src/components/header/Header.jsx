import { NavLink } from 'react-router';
import './Header.css'
import ThemeSwitcher from './ThemeSwitcher';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import LangSwitcher from './LangSwitcher';

const Header = () => {
  const { theme } = useContext(ThemeContext)
  
    return (
      <header style={{background: theme === 'light' ? '#333' : '#222'}}>
        <nav className="main-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/weather">Weather</NavLink>
        </nav>
        
        <div>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
        
      </header>
    );
}

export default Header;
