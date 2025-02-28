import React, { useEffect, useState } from 'react';
import Images from '../assets/images';
import { userLogin } from '../api/userApi';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/slice/userSlice';
import { useAppDispatch } from '../store/hooks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const savedUserName = localStorage.getItem('rememberedUserName');
        const savedRememberMe = localStorage.getItem('rememberMe') === 'true';
        const savedPassword = localStorage.getItem('rememberedPassword');
        if (savedUserName && savedPassword && savedRememberMe) {
            setUserName(savedUserName);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            const response = await userLogin(userName, password);
            if (response) {
                dispatch(login({
                    token: response.token
                }))
                if (rememberMe) {
                    localStorage.setItem('rememberedUserName', userName);
                    localStorage.setItem('rememberedPassword', password);
                    localStorage.setItem('rememberMe', 'true');
                }
                else {
                    localStorage.removeItem('rememberedUserName');
                    localStorage.removeItem('rememberedPassword');
                    localStorage.removeItem('rememberMe');
                }
                toast.success('Logged in successfully!');
                setTimeout(() => {
                    navigate('/');
                }, 1000);

            }
            else {
                toast.error('Login failed, Invalid credentials. Please try again.')
            }
        } catch (error) {
            console.log("Error loggining in", error)
            toast.error('Error, Login failed. Please try again.')
        }
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <div className="md:w-1/2 w-full bg-gray-200 flex items-center justify-center">
                <img
                    src={Images.loginImage}
                    alt="Login Illustration"
                    className="w-full h-auto object-cover md:h-screen"
                />
            </div>

            <div className="md:w-1/2 w-full flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>
                    <form className="space-y-4">

                        <div>
                            <input
                                type="text"
                                id="username"
                                className="mt-1 block w-full px-3 py-2  border-b focus:outline-none"
                                placeholder="Username"
                                required
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border-b  focus:outline-none"
                                placeholder="Password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 text-ashBrown border-gray-300 rounded"
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-800">
                                Remember Me
                            </label>
                        </div>

                        <div className="space-y-2">
                            <button onClick={handleLogin}
                                type="submit"
                                className="w-full bg-ashBrown text-white py-2 px-4 rounded-lg hover:bg-primaryColor"
                            >
                                Sign In
                            </button>
                            <button
                                type="button"
                                className="w-full bg-transparent border text-ashBrown py-2 px-4 rounded-lg hover:bg-lightcolor focus:outline-none "
                            >
                                Register Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;
