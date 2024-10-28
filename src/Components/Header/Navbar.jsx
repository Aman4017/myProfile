import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import light from '../../assets/light.png';
import dark from '../../assets/dark.png';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

function Navbar() {
    const [click, setClick] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = (event) => {
        setDarkMode(!darkMode);
        if (event.target.checked) {
            document.documentElement.setAttribute('class', 'dark');
        } else {
            document.documentElement.removeAttribute('class');
        }
    };

    useEffect(() => {
        document.documentElement.setAttribute('class', 'dark');
    }, []);

    const handleClick = () => setClick(!click);
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'TechStack', path: '/techstack' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
        { name: 'Resume', path: '/resume' }, // Added Resume
    ];

    const content = (
        <div className='lg:hidden block absolute top-16 w-full left-0 bg-white dark:bg-slate-900 transition p-5'>
            <ul className='text-center text-lg space-y-4'>
                {navItems.map((item, index) => (
                    <Link key={index} to={item.path} onClick={handleClick}>
                        <li className='py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer'>
                            {item.name}
                        </li>
                    </Link>
                ))}
                <div className='flex justify-center pt-4'>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            onChange={toggleTheme}
                            checked={darkMode}
                        />
                        <div className="w-12 h-6 bg-slate-500 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all">
                            <img src={light} alt="light" className="absolute w-4 z-10 m-[4px] text-white " />
                            <img src={dark} alt="dark" className="absolute w-4 z-10 m-[4px] text-white right-0 " />
                        </div>
                    </label>
                </div>
            </ul>
        </div>
    );

    return (
        <nav className='sticky top-0 bg-white text-black dark:bg-slate-900 dark:text-white z-50'>
            <div className='h-[10vh] flex items-center justify-between px-6 lg:px-20 border-b border-slate-800'>
                <div className="relative flex items-center">
                    <div className="relative w-20 h-7 border-l-2 border-r-2 border-fuchsia-600 rounded-sm">
                        <div className="absolute w-7 h-7 top-[-8px] left-[-3px] transform scale-y-[0.5774] rotate-[-90deg] border-t-2 border-r-2 border-fuchsia-600 rounded-sm"></div>
                        <div className="absolute w-7 h-7 bottom-[-8px] left-[60px] transform scale-y-[0.5774] rotate-[-90deg] border-b-2 border-l-2 border-fuchsia-600 rounded-sm"></div>
                        <p className="ml-2 mb-3 text-2xl lg:text-2xl font-light text-fuchsia-600">Aman</p>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className='hidden lg:flex items-center space-x-8'>
                    <ul className='flex space-x-8 text-lg'>
                        {navItems.map((item, index) => (
                            <Link key={index} to={item.path}>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer'>
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className='ml-6'>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                onChange={toggleTheme}
                                checked={darkMode}
                            />
                            <div className="w-12 h-6 bg-slate-500 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all">
                                <img src={light} alt="light" className="absolute w-4 z-10 m-[4px] text-white " />
                                <img src={dark} alt="dark" className="absolute w-4 z-10 m-[4px] text-white right-0 " />
                            </div>
                        </label>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className='block lg:hidden transition text-2xl ml-auto mr-4' // Added ml-auto to align right and mr-4 for gap
                    onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>

                {/* Mobile Links */}
                <div className='lg:hidden'>
                    {click && content}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
