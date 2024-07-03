import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Navbar = () => {
    return (
        <nav className="bg-zinc-800 text-white p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="drawer" className="p-2">
                    <MenuIcon sx={{ fontSize: 32 }} />
                </Link>

                <Link to="/" className="text-2xl font-semibold">
                    LSPD LOGO
                </Link>

                <div className="flex items-center gap-7">
                    <Link to="/searchBar" className="p-2">
                        <SearchIcon sx={{ fontSize: 30 }} />
                    </Link>
                    <Link to="/register" className="p-2">
                        <PersonOutlineIcon sx={{ fontSize: 30 }} />
                    </Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
