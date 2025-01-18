'use client'
import React from "react";
const NavbarNew = () => {
    return (
        <div className="flex flex-row h-[75px] w-full items-center p-4 relative">
            <a href="/" className="flex gap-1 text-blue-500 items-center pl-4">
                <img src="/logo/PAR2.png" alt="logo" width="50" />
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-blue-500">PARV</span>
                    <span className="text-xs font-semibold text-blue-500">Financial Service</span>
                </div>
            </a>
            <div className="absolute top-0 -left-[100vw] h-screen w-screen sm:relative  sm:h-[75px]  sm:left-0 bg-blue-100 sm:bg-transparent sm:flex sm:flex-row sm:items-center sm:gap-4 flex-1">
                <ul className="flex flex-col sm:flex-row gap-4 p-4 sm:p-0 flex-1 items-center justify-center">
                    <li><a href="#" className="hover:text-[#007bff] text-[#007bff] font-bold block text-base">Home</a></li>
                    <li><a href="#" className="hover:text-[#007bff] text-gray-600 font-bold block text-base">Team</a></li>
                    <li><a href="#" className="hover:text-[#007bff] text-gray-600 font-bold block text-base">Feature</a></li>
                    <li><a href="#" className="hover:text-[#007bff] text-gray-600 font-bold block text-base">Blog</a></li>
                    <li><a href="#" className="hover:text-[#007bff] text-gray-600 font-bold block text-base">About</a></li>
                    <li><a href="#" className="hover:text-[#007bff] text-gray-600 font-bold block text-base">Contact</a></li>
                </ul>
                <button type="button"
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-white text-[15px] font-semibold flex items-center justify-center gap-2 mx-auto sm:ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fill-white inline w-4 h-4" viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6"></circle>
                        <path
                            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z">
                        </path>
                    </svg>
                    Login
                </button>
            </div>
            {/* <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
            </label> */}

            <button id="toggleMenu" className="sm:hidden ml-auto mr-4 p-2 border rounded-full fixed right-0">
                <svg id="menuIcon" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2z"
                        clipRule="evenodd"></path>
                </svg>
                <svg id="closeIcon" className="w-6 h-6 hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                </svg>
            </button>
        </div>
    )
}

export default NavbarNew;