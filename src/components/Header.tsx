import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Images from '../assets/images';
import { clearLogin } from '../store/slice/userSlice';

const Header = () => {
    const token = useAppSelector((state: any) => state.login.token);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(clearLogin());
    }

    return (
        <header className='bg-primaryColor flex justify-between 
        items-center p-2 sm:p-4 flex-wrap '>
            <h1 className="text-2xl font-bold text-gray-800
            mr-auto cursor-pointer m:text-xl md:text-2xl">
                ShopSpace
            </h1>
            <div className="flex items-center gap-4 flex-wrap">
                <nav className='flex gap-6 items-center flex-wrap justify-center'>
                    <Link to="/" className='text-gray-800 text-sm font-medium 
                    hover:text-gray-600 transition duration-300'>
                        HomePage
                    </Link>
                    <Link to="/" className="text-gray-800 text-sm font-medium hover:text-gray-600 transition duration-300">
                        Categories
                    </Link>
                    <Link to="/" className="text-gray-800 text-sm font-medium hover:text-gray-600 transition duration-300">
                        ContactUs
                    </Link>
                    <Link to="/" className="text-gray-800 text-sm font-medium hover:text-gray-600 transition duration-300">
                        More Options
                    </Link>

                    {token ? (
                        <>
                            <img src={Images.usericon} />
                            <Link onClick={handleLogout} to="/" className="text-gray-800 text-sm font-medium hover:text-gray-600 transition duration-300">
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-800 text-sm font-medium hover:text-gray-600 transition duration-300">
                                Login
                            </Link>

                        </>
                    )}
                </nav>

                <div className="relative flex flex-1 max-w-lg w-full">
                    <input type='text'
                        placeholder='What are you looking for?'
                        className='border border-gray-300 rounded-full pz-3 py-2 text-sm w-full 
                    focus:outline-none focus:ring-2 focus:ring-gray-400'
                    />
                </div>
            </div>
        </header>
    )
}

export default Header