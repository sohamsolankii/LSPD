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

const Navbar = ({ isAdmin = false}) => { //I set this "true" temporarily, logic baad mein...
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
                <div className="flex justify-between items-center p-3 fixed w-full top-0 z-50 bg-[var(--bg2op)] dark:bg-[var(--dbg2op)] backdrop-blur-xl border-b-4 border-[var(--lgold)] dark:border-[var(--dltext)] text-white">
                    <Link to="#" className="menu-bars ml-3 group" onClick={showSidebar}>
                        <MenuIcon sx={{ fontSize: 25, md: { fontSize: 30 } }} className="text-[var(--lgold)] dark:text-[var(--dltext)] group-hover:text-[var(--lblue)] dark:group-hover:text-[var(--dlblue)] transition-colors duration-300" />
                    </Link>

                    <Link to="/" className="flex items-center text-xl md:text-2xl font-bold sm:text-[var(--lgold)] text-[var(--lblue)] sm:dark:text-[var(--dltext)] dark:text-[var(--dlblue)]">
                        <img src={logo} alt="LSPD Logo" className="invisible md:visible h-8 md:h-10 mr-2" />
                        {isAdmin ? (
                            <span className="relative">
LSPD EAGLE-EYE 
<span className="bg-[var(--lgold)] text-lg dark:bg-[var(--dltext)] text-[var(--bg1)] dark:text-[var(--dbg1)] px-3 py-1 rounded-md hidden md:inline-block">ADMIN</span>

                            </span>
                        ) : (
                            "LSPD EAGLE-EYE"
                        )}
                    </Link>

                    <div className="flex items-center gap-4 md:gap-7 pr-4 md:pr-6">
                        {isDarkMode ? (
                            <button onClick={toggleTheme} className="group">
                                <LightModeIcon sx={{ fontSize: 25, md: { fontSize: 30 } }} className="text-[var(--lgold)] dark:text-[var(--dltext)] group-hover:text-[var(--lblue)] dark:group-hover:text-[var(--dlblue)] transition-colors duration-300" />
                            </button>
                        ) : (
                            <button onClick={toggleTheme} className="group">
                                <DarkModeRoundedIcon sx={{ fontSize: 25, md: { fontSize: 30 } }} className="text-[var(--lgold)] group-hover:text-[var(--lblue)] transition-colors duration-300" />
                            </button>
                        )}
                        <Link to="/register" className="group">
                            <PersonRoundedIcon sx={{ fontSize: 25, md: { fontSize: 30 } }} className="text-[var(--lgold)] dark:text-[var(--dltext)] group-hover:text-[var(--lblue)] dark:group-hover:text-[var(--dlblue)] transition-colors duration-300" />
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
