import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from '/src/assets/lspd-logo.png';

const Navbar = () => {
    return (
        <nav className="bg-[var(--bg2op)] backdrop-blur-xl border-b-2 border-[var(--lgold)] text-white p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/Dashboard" className="p-2">
                    <MenuIcon sx={{ fontSize: 32 }} className="text-[var(--lblue)]" />
                </Link>

                <Link to="/" className="flex items-center text-2xl font-bold text-[var(--lgold)]">
                    <img src={logo} alt="LSPD Logo" className="h-10 mr-2" />
                    LSPD EAGLE-EYE
                </Link>

                <div className="flex items-center gap-7">
                    <Link to="/searchBar" className="p-2">
                        <SearchIcon sx={{ fontSize: 30 }} className="text-[var(--lgold)]" />
                    </Link>
                    <Link to="/register" className="p-2">
                        <PersonOutlineIcon sx={{ fontSize: 30 }} className="text-[var(--lgold)]" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
