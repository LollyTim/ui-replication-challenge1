'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const LandingPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{
                backgroundImage: 'url("/Group 1321314634.png")'
            }}
        >
            {/* Responsive Navbar */}
            <nav className="w-full px-4 py-3 md:py-6 lg:px-0">
                <div className="w-[90%] max-w-6xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="w-32 md:w-40 lg:w-48">
                        <Image
                            src="/puerii_logo.svg"
                            alt="Puerii Logo"
                            width={120}
                            height={50}
                            className="object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <nav className="flex space-x-6 text-white">
                            {['Children\'s Plans', 'Investments', 'Testimonies', 'FAQ'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-lg hover:text-gray-200 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <button className="bg-white text-black px-6 py-3 rounded-full hidden lg:flex hover:bg-gray-100 transition-colors">
                        Create a Plan
                    </button>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={handleToggleMobileMenu}
                            className="text-white text-[24px] focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/80 z-50 lg:hidden" onClick={handleToggleMobileMenu}>
                        <div className="flex flex-col items-center justify-center h-full space-y-6 text-white">
                            {['Children\'s Plans', 'Investments', 'Testimonies', 'FAQ'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-2xl"
                                    onClick={handleToggleMobileMenu}
                                >
                                    {item}
                                </a>
                            ))}
                            <button
                                className="bg-white text-black px-8 py-4 rounded-full"
                                onClick={handleToggleMobileMenu}
                            >
                                Create a Plan
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="w-[90%] max-w-6xl mx-auto px-4 flex-grow flex flex-col justify-center  lg:mt-28">
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="bg-black/30 backdrop-blur-lg rounded-lg p-6 md:p-8 lg:p-10 max-w-xl mx-auto lg:mx-0">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
                                Secure your child&apos;s financial future
                            </h1>
                            <p className="text-base md:text-lg text-white mb-6 md:mb-8">
                                Take charge of your Ward&apos;s future, create a savings plan and forever secure their financial future.
                            </p>
                            <button className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-100 transition-colors">
                                Create savings plan
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 hidden lg:flex justify-end relative mt-28">
                        <div className="flex flex-col -space-y-12 md:-space-y-16 lg:-space-y-40">
                            {[
                                "/Frame 1618873675.png",
                                "/Frame 1618873676.png",
                                "/Frame 1618873677.png"
                            ].map((src, index) => (
                                <Image
                                    key={index}
                                    src={src}
                                    alt={`Hero image ${index + 1}`}
                                    width={500}
                                    height={300}
                                    className="object-contain w-full max-w-md"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;