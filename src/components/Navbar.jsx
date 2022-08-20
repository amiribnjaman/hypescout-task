import React from 'react';
import Logo from '../Assets/logo.png'
import LogoSecondary from '../Assets/logo-secondary.png'

const Navbar = () => {
    return (
        <div className='dark:bg-gray-900 h-20 flex items-center'>
            <nav class="w-11/12 mx-auto bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </a>
                    <div>
                        <div class="">
                            <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                                <div class="flex items-center">
                                    <ul class="mt-0 mr-6 space-x-8 text-sm font-medium flex justify-between">
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
                    </div>
                    <div class="flex items-center">
                        <ul class="mt-0 mr-6 space-x-8 text-sm font-medium flex justify-between">
                            <li className='mr-2'>
                                <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page"></a>
                            </li>
                            <li className='mr-2'>
                                <a href="#" class="text-gray-900 dark:text-white hover:underline"></a>
                            </li>
                            <li className='mr-2'>
                                <a href="#" class="text-gray-900 dark:text-white hover:underline">Hi, Rakib</a>
                            </li>
                            <li className='mr-2'>
                                <a href="#" class="text-gray-900 dark:text-white hover:underline">img</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;