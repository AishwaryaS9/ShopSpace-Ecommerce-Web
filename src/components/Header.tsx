import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import Images from '../assets/images';
import { getCategories } from '../api/categories';


const Header = ({ setSearchTerm }: any) => {
    const [categories, setCategories] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const cartCount = useAppSelector((state) => state.cart.count);
    const searchBoxRef: any = useRef(null);
    const menuRef: any = useRef(null);
    const navigate = useNavigate();

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            if (response) {
                setCategories(response);
            } else {
                console.log("Failed to load categories");
            }
        } catch (error) {
            console.log("Failed to load categories", error);
        }
    };

    const handleInputFocus = () => {
        fetchCategories();
        setShowSuggestions(true);
    };

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        setInputValue(value);
        setSearchTerm(value);
    };

    const handleSuggestionClick = (category: any) => {
        setInputValue(category);
        setShowSuggestions(false);
        setSearchTerm(category);
    };

    const handleTitleClick = () => {
        setInputValue('');
        setSearchTerm('');
        navigate('/');
    };

    const handleClickOutside = (event: any) => {
        if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
            setShowSuggestions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleCart = () => {
        navigate("/cart");
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 flex justify-between items-center p-2 sm:p-4 flex-wrap">
            <img onClick={handleTitleClick} src={Images.logo} className="mr-auto ml-12 cursor-pointer w-26 h-16" alt="logo" />

            <span className="md:hidden" onClick={toggleMenu}>
                <img src={Images.hamburgericon} className="w-6 h-6 text-white cursor-pointer" />
            </span>

            <nav
                ref={menuRef}
                className={`fixed top-0 right-0 h-full w-full max-w-[50%] bg-white flex flex-col items-center
                   p-6 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:flex-row md:items-center md:bg-transparent md:p-0 md:h-auto`}
            >

                <span className="self-end mb-4 cursor-pointer md:hidden" onClick={toggleMenu}>
                    <img src={Images.clearicon} className="w-6 h-6 text-white cursor-pointer" />
                </span>

                <Link to="/" className=" text-gray-800 text-base font-medium hover:text-primaryColor transition duration-300 py-3 md:mr-6">
                    Home
                </Link>

                <Link to="/aboutus" className="text-gray-800 text-base font-medium hover:text-primaryColor transition duration-300 py-3 md:mr-6">
                    About Us
                </Link>

                <Link
                    to="/contactus"
                    className="text-gray-800 text-base font-medium hover:text-primaryColor transition duration-300 py-3 md:mr-6"
                >
                    ContactUs
                </Link>

                <div className="hidden md:block relative flex-1 max-w-3xl" ref={searchBoxRef}>
                    <div className="flex items-center border bg-white border-gray-300 rounded-full py-2 px-4">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full text-base focus:outline-none capitalize"
                            value={inputValue}
                            onFocus={handleInputFocus}
                            onChange={handleInputChange}
                        />
                        <span className="text-gray-600 text-xl">
                            <img src={Images.searchicon} />
                        </span>
                    </div>
                    {showSuggestions && categories.length > 0 && (
                        <ul className="absolute top-full left-0 w-full border bg-white border-gray-300 rounded-lg shadow-lg z-10 max-h-52 overflow-y-auto">
                            {categories
                                .filter((category: any) =>
                                    category.toLowerCase().includes(inputValue.toLowerCase())
                                )
                                .map((category) => (
                                    <li
                                        key={category}
                                        className="p-3 cursor-pointer text-base hover:bg-gray-100 capitalize"
                                        onClick={() => handleSuggestionClick(category)}
                                    >
                                        {category}
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>

                <div className="cart relative mt-2 mx-2 flex items-center cursor-pointer py-3 md:mr-4" onClick={handleCart}>
                    <img src={Images.carticon} alt="cart" />
                    {cartCount > 0 && (
                        <span className="cart-count absolute -top-0 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
