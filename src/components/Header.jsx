import React, { useState } from "react";
import "../App.css"; // Import the CSS file for custom styles
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { Dropdown, Menu } from "antd";
import { categoriesData } from "../seeders/data";
import logo from "../Assets/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(false); // New state for search bar
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // State for mobile dropdown
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.CategoryID}`);
    setMenuOpen(false);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  // Ant Design menu for dropdown in desktop view
  const naturalStonesMenu = (
    <Menu>
      {categoriesData.map((category) => (
        <Menu.Item
          key={category.CategoryID}
          onClick={() => handleCategoryClick(category)}
        >
          {category.CategoryName}
        </Menu.Item>
      ))}
    </Menu>
  );

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    {
      label: "Natural Stones",
      href: "/categories",
      dropdown: true, // Marking that this has a dropdown
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Our Work", href: "/ourwork" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contactus" },
  ];

  return (
    <header className="bg-white shadow-md top-0 left-0 w-full font-lexend">
      <div
        className={`container mx-auto flex justify-between items-center px-8 font-lexend`}
      >
        <div className="flex items-center">
          {/* Logo and title */}
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-15 cursor-pointer"
            />
          </a>
          <div className="mt-7">
            <a href="/">
            <span
              className="text-xl md:text-3xl font-bold ml-2 font-lexend"
              style={{ color: "#b89735"}}
            >
              Ace Natural Stones
            </span>
            <span
              className="md:ml-[90px] lg:ml-[90px] ml-[10px]"
              style={{
                color: "black",
                fontFamily: "Pacifico, cursive",
                display: "block",
              }}
            >
              a natural stone supplying co.
            </span>
            </a>
          </div>
        </div>
        <nav className="hidden md:flex space-x-10 mt-3 font-lexend">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.dropdown ? (
                <Dropdown
                  overlay={naturalStonesMenu}
                  trigger={["hover"]}
                  className="border-gold-700"
                >
                  <a
                    href={item.href}
                    className="nav-link text-xl text-gray-500 font-lexend"
                    // style={{ fontFamily: "lexand" }}
                  >
                    {item.label.toUpperCase()}
                  </a>
                </Dropdown>
              ) : (
                <a
                  href={item.href}
                  className="nav-link text-xl text-gray-500 font-lexend"
                  // style={{ fontFamily: "lexand" }}
                >
                  {item.label.toUpperCase()}
                </a>
              )}
            </React.Fragment>
          ))}
        </nav>
        <div className="flex items-center space-x-4 font-lexend">
          {/* Search and mobile menu toggle */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gold-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-50 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 w-4/5 bg-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-end mb-4">
            <button onClick={toggleMenu} className="text-gold-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-item border-t border-b border-gold-700 font-lexend"
            >
              {item.dropdown ? (
                <>
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={toggleMobileDropdown}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`dropdown-indicator ${
                        mobileDropdownOpen ? "transform rotate-180" : ""
                      } text-gold-700`}
                    >
                      ▼
                    </span>
                  </div>
                  {mobileDropdownOpen && (
                    <div className="dropdown-content p-4 bg-white border border-gold-700 font-lexend">
                      {categoriesData.map((category) => (
                        <div
                          key={category.CategoryID}
                          onClick={() => handleCategoryClick(category)}
                          className="py-1 cursor-pointer"
                        >
                          {category.CategoryName}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} className="block p-4 text-lg">
                  {item.label}
                </a>
              )}
            </div>
          ))}

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://www.instagram.com/ace_natural_stones?igsh=MWloZ200M3J4c2p0dQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="border border-pink-700 rounded-full p-2"
            >
              <FaInstagram className="text-pink-600 text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/@acenaturalstones"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-600 rounded-full p-2"
            >
              <FaYoutube className="text-red-600 text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562053136503&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 rounded-full p-2"
            >
              <FaFacebook className="text-blue-600 text-2xl" />
            </a>
            <a
              href="https://wa.me/message/OCUCMZG4DRCPF1"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-600 rounded-full p-2"
            >
              <FaWhatsapp className="text-green-600 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
