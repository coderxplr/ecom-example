import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for custom styles
import { useNavigate } from 'react-router-dom';
import {  FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';


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

    const menuItems = [
        // { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Natural Stones', href: '/categories' },
        // { label: 'Natural Stones', href: '/categories'},
        { label: 'Gallery', href: '/gallery'},
        { label: 'Contact Us', href: '/contactus' },
        // { label: 'Design Suggestions', href: '/designs-suggestions', dropdown:['Garden','Living','Master Bedroom','Bedroom','Kitchen','Dinning Room','Sitout','Power Room','Balcony','Prayer Room','Terrace','Commercial','Restaurants','Cafes'] },
        // { label: 'Display Center', href: '/display-center'},
        // { label: 'Our Work', href: '/our-work' },
        // { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-white shadow-md p-4 " style={{ fontFamily: 'lexand' }}>
            <div className={`container mx-auto flex justify-between items-center px-8 ${searchOpen ? 'hidden' : 'flex'}`}>
                <div className="flex items-center space-x-4">
                    {/* <a href="/">
                    <img src={logo} alt="logo" className="h-20 w-20" />
                    </a>
                    <h2 className="text-gold-700 text-xl font-semibold">Ace Natural Stones</h2> */}
                </div>
                <nav className="hidden md:flex space-x-10">
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.href} className="nav-link text-xl text-gray-500" style={{ fontFamily: 'lexand' }}>{item.label.toUpperCase()}</a>
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
                    <div className="flex justify-center space-x-4 mt-6">
                        <a href="https://www.instagram.com/ace_natural_stones?igsh=MWloZ200M3J4c2p0dQ==" target="_blank" rel="noopener noreferrer" className="border border-pink-700 rounded-full p-2">
                            <FaInstagram className="text-pink-600 text-2xl"/>
                        </a>

                        <a href="https://www.youtube.com/@acenaturalstones" target="_blank" rel="noopener noreferrer" className="border border-red-600 rounded-full p-2">
                            <FaYoutube className="text-red-600 text-2xl"/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61562053136503&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="border border-blue-600 rounded-full p-2">
                            <FaFacebook className="text-blue-600 text-2xl"/>
                        </a>
                        <a href="https://wa.me/message/OCUCMZG4DRCPF1" target="_blank" rel="noopener noreferrer" className="border border-green-600 rounded-full p-2">
                            <FaWhatsapp className="text-green-600 text-2xl"/>
                        </a>
                    </div>
                </div>
            </div>


        </header>
    );
};

export default Header;