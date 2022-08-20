import React from 'react';
import Logo from '../Assets/logo.png'
import SecodaryLogo from '../Assets/logo-secondary.png'

const Footer = () => {
    return (
        <div className='w-full mt-10'>
            <footer class="p-4 w-11/12 mx-auto bg-white sm:p-6 dark:bg-gray-900">
                <div class="mb-6">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <img src={Logo} class="mr-3 h-8" alt="FlowBite Logo" />
                    </a>
                </div>
                <div>
                    <div class="md:grid grid-cols-4 gap-10 md:justify-between">
                        <div>
                            <p class="mb-6 text-[13px] text-gray-900 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eveniet tempora nisi explicabo, nobis quod sit eum nesciunt sed dolor.</p>
                            <ul class="text-gray-600 dark:text-gray-400">
                                
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-4 text-sm font-semibold text-gray-900  dark:text-white">Company</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li class="mb-2">
                                    <a href="https://flowbite.com/" class="hover:underline">About Us</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Carrers</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Case Study</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Blog</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-4 text-sm font-semibold text-gray-900  dark:text-white">Influencer</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li class="mb-2">
                                    <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Join as Influencer</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">HypeSocial</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Advertiser</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li class="mb-2">
                                    <a href="#" class="hover:underline">Join as Advertiser</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Hypelink</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="mt-20 sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; <a href="https://flowbite.com/" class="hover:underline">Hypescoute 2022</a>. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm">
                            Terms & Conditions
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-whit text-sm">
                            Privacy
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm">
                            Sitemap
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;