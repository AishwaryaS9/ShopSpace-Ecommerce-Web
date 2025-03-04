import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks';
import Images from '../assets/images';
import { useEffect, useRef, useState } from 'react';
import { getCategories } from '../api/categories';

const Header = ({ searchTerm, setSearchTerm }: any) => {
    const [categories, setCategories] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const cartCount = useAppSelector((state) => state.cart.count);
    const searchBoxRef: any = useRef(null);
    const navigate = useNavigate();

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            if (response) {
                setCategories(response);
            } else {
                console.log("failed to load categories")
            }
        } catch (error) {
            console.log("Failed to load categories", error)
        }
    }

    const handleInputFocus = () => {
        fetchCategories();
        setShowSuggestions(true);
    }

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        setInputValue(value);
        setSearchTerm(value);
    }

    const handleSuggestionClick = (category: any) => {
        setInputValue(category);
        setShowSuggestions(false);
        setSearchTerm(category);
    }

    const handleTitleClick = () => {
        setInputValue('');
        setSearchTerm('');
        navigate('/');
    }

    const handleClickOutside = (event: any) => {
        if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
            setShowSuggestions(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, []);

    const handleCart = () => {
        navigate("/cart");
    }

    return (
        <header className='bg-primaryColor flex justify-between 
        items-center p-2 sm:p-4 flex-wrap '>
            <img onClick={handleTitleClick} src={Images.logo} className=' mr-auto cursor-pointer w-20' />
            <div className="flex items-center gap-4 flex-wrap">
                <nav className='flex gap-6 items-center flex-wrap justify-center'>
                    <Link to="/" className='text-gray-800 text-sm font-medium 
                    hover:text-gray-600 transition duration-300'>
                        Home
                    </Link>
                    <Link to="/contactus" className="text-gray-800 text-sm font-medium hover:text-gray-600 transition duration-300">
                        ContactUs
                    </Link>

                    <div className="relative flex-1 max-w-3xl w-full " ref={searchBoxRef}>
                        <div className="flex items-center border bg-white border-gray-300 rounded-full py-2 px-4">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full text-base focus:outline-none"
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
                                            className="p-3 cursor-pointer text-base hover:bg-gray-100"
                                            onClick={() => handleSuggestionClick(category)}
                                        >
                                            {category}
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>

                    <div className="cart relative mt-2 flex items-center cursor-pointer">
                        <img src={Images.carticon} onClick={handleCart} />
                        {cartCount > 0 && (
                            <span className="cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header