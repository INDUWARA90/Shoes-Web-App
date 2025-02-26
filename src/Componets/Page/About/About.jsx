import React from 'react'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'

import { FaSearch, FaBullhorn, FaEnvelope, FaChartLine } from "react-icons/fa";
function About() {
    return (
        <div className=''>
            <Header />


            <div className="mt-48" >

                <div className="bg-gray-50 text-gray-900 mt-[100px]">

                    {/* Hero Section */}
                    <section className="text-center py-16 px-8">
                        <h2 className="text-3xl font-bold">Navigating the digital landscape for success</h2>
                        <p className="mt-4 text-gray-600">Empowering businesses through cutting-edge digital solutions to enhance online presence and drive conversions.</p>
                        <button className="mt-6 bg-black text-white px-6 py-3 rounded">Book a Consultation</button>
                    </section>

                    {/* Services */}
                    <section className="py-16 px-8 bg-white">
                        <h3 className="text-2xl font-bold text-green-600">Services</h3>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            
                            <div className="p-6 border rounded-lg shadow flex items-center space-x-4">
                                <FaSearch className="text-green-500 text-3xl" />
                                <div>
                                    <h4 className="font-bold">Search Your Preference</h4>
                                    <p className="text-gray-600 text-sm">Enhancing our choice while you searching.</p>
                                </div>
                            </div>

                            <div className="p-6 border rounded-lg shadow flex items-center space-x-4">
                                <FaBullhorn className="text-green-500 text-3xl" />
                                <div>
                                    <h4 className="font-bold">Pay Per Click Advertising</h4>
                                    <p className="text-gray-600 text-sm">Maximizing ROI with targeted ad campaigns.</p>
                                </div>
                            </div>
                            
                            <div className="p-6 border rounded-lg shadow flex items-center space-x-4">
                                <FaChartLine className="text-green-500 text-3xl" />
                                <div>
                                    <h4 className="font-bold">Social Media Marketing</h4>
                                    <p className="text-gray-600 text-sm">Engaging audiences across multiple social platforms.</p>
                                </div>
                            </div>
                            <div className="p-6 border rounded-lg shadow flex items-center space-x-4">
                                <FaEnvelope className="text-green-500 text-3xl" />
                                <div>
                                    <h4 className="font-bold">E-mail Marketing</h4>
                                    <p className="text-gray-600 text-sm">Building relationships with personalized email campaigns.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Case Study */}
                    <section className="py-16 px-8 bg-gray-100">
                        <h3 className="text-2xl font-bold text-green-600">Case Study</h3>
                        <div className="mt-6 p-6 bg-black text-white rounded-lg">
                            <h4 className="text-lg font-bold">Success Story</h4>
                            <p className="mt-2 text-sm">How we helped a Fortune 500 company achieve marketing success.</p>
                            <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded">Learn More</button>
                        </div>
                    </section>


                </div>


            </div>


            <Footer />
        </div>
    )
}

export default About