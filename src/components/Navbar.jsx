import React, { useState } from 'react';
import Logo from '../Assets/logo.png'
import LogoSecondary from '../Assets/logo-secondary.png'
import Person from '../Assets/person.png'

const Navbar = ({ isDark, setIsDark, isLight, setIsLight }) => {
    const [showThemeMenu, setShowThemeMenu] = useState(false)

    // handle show theme menu
    const handleShowTheme = () => {
        setShowThemeMenu(!showThemeMenu)
    }

    const handleIsDark = () => {
        setIsDark(true)
        setIsLight(false)
    }

    const handleIsLight = () => {
        setIsLight(true)
        setIsDark(false)
    }

    return (
        <div className='dark:bg-[#17181B] bg-[#F7F7F8] dark:text-gray-50 flex items-center'>
            <nav class="w-11/12 mx-auto border-gray-200 mt-0 py-3 ">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="" class="flex text-white items-center">
                        <img src={isDark ? Logo : LogoSecondary} class="mr-3 h-8" alt="Flowbite Logo" />
                    </a>
                    <div>
                        <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                            <div class="flex items-center justify-center">
                                <ul class="mt-0 space-x-8 text-sm font-medium flex justify-between">
                                    <li className='mr-2'>
                                        <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Dashboard</a>
                                    </li>
                                    <li className='mr-2'>
                                        <a href="#" class="text-gray-900 dark:text-white hover:underline">Campaign</a>
                                    </li>
                                    <li className='mr-2'>
                                        <a href="#" class="text-gray-900 dark:text-white hover:underline">Hypesocial</a>
                                    </li>
                                    <li className='mr-2'>
                                        <a href="#" class="text-gray-900 dark:text-white hover:underline">Insights</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <ul class="mt-0 mr-6 space-x-8 text-sm font-medium flex justify-between items-center">
                            <li className='mr-2'>
                                <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                    </svg>
                                </a>
                            </li>
                            <li className='mr-2'>
                                <button
                                    onClick={handleShowTheme}
                                    href="#" class="mt-1 relative text-gray-900 dark:text-white hover:underline">
                                    { isDark ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                    </svg>}

                                    {/*------------ Theme color Menu---------------- */}
                                    <div className={`${showThemeMenu ? ' top-10 -left-12' : ' top-0 left-96'} dark:bg-[#17181B] bg-[#F7F7F8] py-2 absolute rounded-md z-10`}>
                                        <ul className=''>
                                            <li
                                                onClick={handleIsDark}
                                                className='flex py-2 px-10 dark:hover:bg-black hover:bg-white mx-1 rounded pl-4 pr-12'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                                </svg> <span className='ml-2'>Dark</span>
                                            </li>
                                            <li
                                                onClick={handleIsLight}
                                                className='flex py-2 pl-4 pr-12 dark:hover:bg-black hover:bg-white mx-1 rounded'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                                </svg> <span className='ml-2'>Light</span>
                                            </li>
                                        </ul>
                                    </div>


                                </button>
                            </li>
                            <li className='mr-2'>
                                <a href="#" class="text-gray-900 dark:text-white hover:underline">Hi, Rakib</a>
                            </li>
                            <li className='mr-2'>
                                <a href="#" class="text-gray-900 w-16 h-16 dark:text-white hover:underline">
                                    <img src={Person} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;