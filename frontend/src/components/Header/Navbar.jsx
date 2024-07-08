import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DarkModeRoundedIcon from '@mui/icons-material/Brightness7Sharp';
import LightModeIcon from '@mui/icons-material/Brightness4';
import logo from '/src/assets/lspd-logo.png';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Apply the theme class to the root element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="bg-[var(--bg2op)] backdrop-blur-xl border-b-2 border-[var(--lgold)] text-white p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/Dashboard" className="md:p-2 p-1">
                    <MenuIcon sx={{ fontSize: 30 }} className="text-[var(--lgold)] text-sm" />
                </Link>

                <Link to="/" className="flex items-center md:text-2xl text-lg font-bold md:text-[var(--lgold)] text-[var(--lblue)]">
                    <img src={logo} alt="LSPD Logo" className="h-10 mr-2 md:block hidden" />
                    LSPD EAGLE-EYE
                </Link>

                <div className="flex items-center gap-2 md:gap-7">
                    {isDarkMode ? (
                        <button onClick={toggleTheme} className="md:p-2 p-1">
                            <LightModeIcon sx={{ fontSize: 30 }} className="text-[var(--lgold)]" />
                        </button>
                    ) : (
                        <button onClick={toggleTheme} className="md:p-2 p-1">
                            <DarkModeRoundedIcon sx={{ fontSize: 30 }} className="text-[var(--lgold)]" />
                        </button>
                    )}
                    <Link to="/register" className="md:p-2 p-1">
                        <PersonRoundedIcon sx={{ fontSize: 30 }} className="text-[var(--lgold)]" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
