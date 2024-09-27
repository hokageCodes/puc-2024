"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-[#01553d]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
                    <a href="/" className="flex justify-center">
                        <Image
                            priority
                            width={100}
                            height={100}
                            src="/assets/img/puc-logo.png"
                            className="mr-3"
                            alt="codewithfaraz Logo"
                        />
                    </a>    
                    <ul className="text-lg text-center sm:flex items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
                        <li>
                            <Link legacyBehavior href="/about">
                                <a className="text-white hover:text-gray-400">About</a>
                            </Link>
                        </li>
                        <li className="sm:my-0 my-2">
                            <Link legacyBehavior href="/expertise">
                                <a className="text-white hover:text-gray-400">Practice Areas</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/people">
                                <a className="text-white hover:text-gray-400">People</a>
                            </Link>     
                        </li>
                        <li className="sm:my-0 my-2">
                            <Link legacyBehavior href="/careers">
                                <a className="text-white hover:text-gray-400">Careers</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/contact">
                                <a className="text-white hover:text-gray-400">Contact</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex space-x-4 sm:justify-center">
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
                        >
                            <FaTwitter className="text-white w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
                        >
                            <FaInstagram className="text-white w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
                        >
                            <FaFacebookF className="text-white w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
