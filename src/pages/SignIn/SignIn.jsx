import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SocialLogIn from '../../components/SocialLogin/SocialLogIn';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { createSignIn } = useAuth()
    const navigate = useNavigate()

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();


        // if (!formData.email || !formData.password) {
        //     alert('Both fields are required!');
        //     return;
        // }


        console.log('Form Data:', formData);
        createSignIn(formData.email, formData.password)
        navigate('/')

        setFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign In</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white text-lg font-bold py-3 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    New here?
                    <Link
                        to={'/signup'}
                        className="text-blue-600 font-bold ml-2 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                <div>
                    <SocialLogIn />
                </div>
            </div>

        </div>
    );
};

export default SignIn;
