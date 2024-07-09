import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DarkModeRoundedIcon from '@mui/icons-material/Brightness7Sharp';
import LightModeIcon from '@mui/icons-material/Brightness4';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import logo from '/src/assets/lspd-logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={`navbar ${sidebar ? 'sidebar-active' : ''}`}>
                <div className="container flex justify-between items-center p-4 fixed w-full top-0 z-50 bg-[var(--bg2op)] dark:bg-[var(--dbg2op)] backdrop-blur-xl border-b-4 border-[var(--lgold)] dark:border-[var(--dltext)] text-white">
                    <Link to="#" className="menu-bars" onClick={showSidebar}>
                        <MenuIcon sx={{ fontSize: 30 }} className="text-[var(--lgold)] dark:text-[var(--dltext)]" />
                    </Link>

                    <Link to="/" className="flex items-center text-2xl font-bold text-[var(--lgold)] dark:text-[var(--dltext)]">
                        <img src={logo} alt="LSPD Logo" className="h-10 mr-2" />
                        LSPD EAGLE-EYE
                    </Link>

                    <div className="flex items-center gap-7">
                        {isDarkMode ? (
                            <button onClick={toggleTheme}>
                                <LightModeIcon sx={{ fontSize: 30 }} className="text-[var(--lgold)] dark:text-[var(--dltext)]" />
                            </button>
                        ) : (
                            <button onClick={toggleTheme}>
                                <DarkModeRoundedIcon sx={{ fontSize: 30 }} className="text-[var(--lgold)]" />
                            </button>
                        )}
                        <Link to="/register">
                            <PersonRoundedIcon sx={{ fontSize: 30 }} className="text-[var(--lgold)] dark:text-[var(--dltext)]" />
                        </Link>
                    </div>
                </div>
                <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {sidebar && <div className="overlay" onClick={showSidebar}></div>}
            </div>
        </IconContext.Provider>
    );
};

export default Navbar;
