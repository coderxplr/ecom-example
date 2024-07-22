import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for custom styles
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/images/logo.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState({});
    const [searchOpen, setSearchOpen] = useState(false); // New state for search bar
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    const toggleDropdown = (label, hasDropdown, route) => {
        if (hasDropdown) {
            setOpenMenus(prevOpenMenus => ({
                ...prevOpenMenus,
                [label]: !prevOpenMenus[label]
            }));
        } else {
            navigate(route);
        }
    };

    const toggleSearchClose = () => {
        setSearchOpen(!searchOpen);
    };
    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        // { label: 'Categories', href: '/categories', dropdown: ['Standard', 'Premium', 'Parking', 'Garden', 'Steps', 'Kitchen', 'Wall Cladding', 'Risers', 'Skirtings'] },
        { label: 'Categories', href: '/categories'},
        { label: 'Products', href: '/products' },
        // { label: 'Design Suggestions', href: '/designs-suggestions', dropdown:['Garden','Living','Master Bedroom','Bedroom','Kitchen','Dinning Room','Sitout','Power Room','Balcony','Prayer Room','Terrace','Commercial','Restaurants','Cafes'] },
        // { label: 'Display Center', href: '/display-center'},
        // { label: 'Our Work', href: '/our-work' },
        // { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-white shadow-md p-4">
            <div className={`container mx-auto flex justify-between items-center px-8 ${searchOpen ? 'hidden' : 'flex'}`}>
                <div className="flex items-center space-x-4">
                    <a href="/">
                    <img src={logo} alt="logo" className="h-20 w-20" />
                    </a>
                    {/* <h2 className="text-gold-700 text-xl font-semibold">Ace Natural Stones</h2> */}
                </div>
                <nav className="hidden md:flex space-x-10">
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.href} className="nav-link text-xl">{item.label.toUpperCase()}</a>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    {/* <div className="relative hidden md:block">
                        <input type="text" className="border border-gold-700 rounded-full focus:outline-none py-2 px-6" placeholder="Search" />
                        <svg className="w-6 h-6 text-gold-700 absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5.22-5.22"></path>
                        </svg>
                    </div> */}
                    {/* <button className="md:hidden" onClick={toggleSearch}>
                        <svg className="w-6 h-6 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5.22-5.22"></path>
                        </svg>
                    </button> */}
                    <button className="md:hidden" onClick={toggleMenu}>
                        <svg className="w-6 h-6 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar */}
            {/* <div className={`flex items-center justify-between py-2 px-4 ${searchOpen ? 'block' : 'hidden'} md:hidden`}>
                <input type="text" className="w-full focus:outline-none py-2 px-4" placeholder="Search" />
                <button onClick={toggleSearchClose} className="text-gold-700 ml-2">❌</button>
                <button onClick={toggleSearch} className="text-gold-700 ml-2">
                    <svg className="w-6 h-6 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5.22-5.22"></path>
                    </svg>
                </button>
            </div> */}

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-30 z-50 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
            <div className={`fixed inset-y-0 right-0 w-4/5 bg-white z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4">
                    <div className="flex justify-end mb-4">
                        <button onClick={toggleMenu} className="text-gold-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    {menuItems.map((item, index) => (
                        <div key={index} className="menu-item border-t border-b border-gold-700">
                            <div
                                className="flex justify-between items-center p-4 cursor-pointer"
                                onClick={() => toggleDropdown(item.label, item.dropdown?.length > 0, item.route)}
                            >
                                <a href={item.href}><span>{item.label}</span></a>
                                {item.dropdown?.length > 0 ? (
                                    <div className="flex items-center">
                                        <div className="border-r border-gold-700 h-4 mr-2"></div>
                                        <span className={`dropdown-indicator ${openMenus[item.label] ? 'transform rotate-180' : ''} text-gold-700`}>▼</span>
                                    </div>
                                ) : null}
                            </div>
                            {openMenus[item.label] && (
                                <div className="dropdown-content p-4 bg-white border border-gold-700">
                                    {item.dropdown.map((contentItem, contentIndex) => (
                                        <a key={contentIndex} href={`${contentItem}`}><p className="py-1">{contentItem}</p></a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://www.instagram.com/ace_natural_stones?igsh=MWloZ200M3J4c2p0dQ==" target="_blank" rel="noopener noreferrer" className="border border-gold-700 rounded-full p-2">
                            <svg className="w-6 h-6 text-gold-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.3 1 .6 1.5 1.1.4.4.8.8 1.1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.3.6-.6 1-1.1 1.5-.4.4-.8.8-1.5 1.1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.3-1-.6-1.5-1.1-.4-.4-.8-.8-1.1-1.5-.2-.5-.4-1.2-.5-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.3-.6.6-1 1.1-1.5.4-.4.8-.8 1.5-1.1.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2M12 0c-3.3 0-3.7 0-5 .1-1.3.1-2.2.3-3 .6-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1-.3.8-.5 1.7-.6 3C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.2.6 3 .3.8.7 1.5 1.3 2.1.6.6 1.3 1 2.1 1.3.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.1-1.3.6-.6 1-1.3 1.3-2.1.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.3-2.1-.6-.6-1.3-1-2.1-1.3-.8-.3-1.7-.5-3-.6C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.3c-2.2 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.9 4.1-4.1 4.1zm6.4-11.9c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
                            </svg>
                        </a>

                        <a href="https://www.youtube.com/@acenaturalstones" target="_blank" rel="noopener noreferrer" className="border border-gold-700 rounded-full p-2">
                            <svg className="w-6 h-6 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 6.6c-.3-1.2-1.2-2.1-2.4-2.4C19 4 12 4 12 4s-7 0-9.1.2C1.7 4.5.8 5.4.5 6.6.2 8.6.2 12 .2 12s0 3.4.3 5.4c.3 1.2 1.2 2.1 2.4 2.4C5 20 12 20 12 20s7 0 9.1-.2c1.2-.3 2.1-1.2 2.4-2.4.3-2 .3-5.4.3-5.4s0-3.4-.3-5.4zm-13 8.8V8.6l6.2 3.4-6.2 3.4z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61562053136503&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="border border-gold-700 rounded-full p-2">
                            <svg className="w-6 h-6 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.4C0 23.4.6 24 1.3 24H12v-9.3H9v-3.6h3V8.3c0-2.7 1.6-4.2 4-4.2 1.2 0 2.3.1 2.7.1v3H17c-1.4 0-1.6.7-1.6 1.6v2.1h3.2l-.4 3.6h-2.8V24h5.5c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


        </header>
    );
};

export default Header;