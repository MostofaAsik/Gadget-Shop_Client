import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)


    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Toggle password visibility
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
    const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

    // Handle input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error('Password and confirm Password are not same!');
            return;
        }


        createUser(formData.email, formData.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser.email);
                toast.success(` You successfuly created an accout`);
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(`${errorMessage}`);
            })

        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="relative mt-1">
                            <AiOutlineMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative mt-1">
                            <AiOutlineLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter your password"
                                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <div className="relative mt-1">
                            <AiOutlineLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type={confirmPasswordVisible ? 'text' : 'password'}
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Confirm your password"
                                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {confirmPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white text-lg font-bold py-3 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    Already have an account?
                    <Link
                        to={'/signin'}
                        className="text-blue-600 font-bold ml-2 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;
