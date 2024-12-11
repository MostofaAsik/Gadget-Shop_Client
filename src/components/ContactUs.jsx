import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai';

const ContactUs = () => {
    return (
        <div className="bg-gray-100">

            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Get in Touch With Us
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, drop us a message.
                    </p>
                    <a
                        href="#contact-form"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-bold transition-all hover:bg-blue-700 hover:text-white"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            {/* Contact Form and Information Section */}
            <section id="contact-form" className="py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Contact Form */}
                    <div className="bg-white p-10 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Send Us a Message
                        </h2>

                        <form action="#" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter the subject"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white text-lg font-bold py-3 rounded-lg hover:bg-blue-700 transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Contact Information
                        </h2>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-center space-x-4">
                                <AiOutlinePhone className="text-blue-600 text-3xl" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                                    <p className="text-gray-600">+1 (123) 456-7890</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <AiOutlineMail className="text-blue-600 text-3xl" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">support@example.com</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center space-x-4">
                                <AiOutlineEnvironment className="text-blue-600 text-3xl" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                                    <p className="text-gray-600">123 Main Street, New York, NY 10001</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default ContactUs;
