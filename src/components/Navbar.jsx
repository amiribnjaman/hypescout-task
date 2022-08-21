import React from 'react';
import Logo from '../Assets/logo.png'
import LogoSecondary from '../Assets/logo-secondary.png'
import Person from '../Assets/person.png'

const Navbar = (props) => {

    const handleSetIsDark = () => {
        console.log(typeof setIsDark);
    }
    return (
        <div className='dark:bg-[#17181B] dark:text-gray-50 flex items-center'>
            <nav class="w-11/12 mx-auto border-gray-200 mt-0 py-3 ">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="" class="flex text-white items-center">
                        <img src={Logo} class="mr-3 h-8" alt="Flowbite Logo" />
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
                                    onClick={handleSetIsDark}
                                    href="#" class="mt-1 text-gray-900 dark:text-white hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                    </svg>
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