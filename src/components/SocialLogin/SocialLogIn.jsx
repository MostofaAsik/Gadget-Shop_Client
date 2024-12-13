import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';

const SocialLogIn = () => {
    const { goooleLogin } = useAuth()
    const navigate = useNavigate()

    const handleGoogleLogIn = () => {
        goooleLogin()
            .then(() => {
                navigate('/')

            })
    }

    return (
        <div>
            <div className="my-4 text-center divider text-gray-500"> or sign in with -</div>
            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogleLogIn} className="bg-white p-3 rounded-full shadow hover:bg-gray-100">
                    <FaGoogle className="text-red-500 text-2xl" />
                </button>
                {/* <button className="bg-white p-3 rounded-full shadow hover:bg-gray-100">
                    <FaFacebook className="text-blue-600 text-2xl" />
                </button>
                <button className="bg-white p-3 rounded-full shadow hover:bg-gray-100">
                    <FaGithub className="text-gray-800 text-2xl" />
                </button> */}
            </div>
        </div>
    );
};

export default SocialLogIn;