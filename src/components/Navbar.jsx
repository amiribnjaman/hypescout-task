import React, { useState } from 'react';
import Logo from '../Assets/logo.png'
import LogoSecondary from '../Assets/logo-secondary.png'
import Person from '../Assets/person.png'

const Navbar = ({ isDark, setIsDark, isLight, setIsLight }) => {
    const [showThemeMenu, setShowThemeMenu] = useState(false)
    const [showMainNav, setShowMainNav] = useState(false)

    // handle show theme menu
    const handleShowTheme = () => {
        setShowThemeMenu(!showThemeMenu)
    }

    // Handle dark
    const handleIsDark = () => {
        setIsDark(true)
        setIsLight(false)
    }

    // Handle light
    const handleIsLight = () => {
        setIsLight(true)
        setIsDark(false)
    }

    return (
        <div className='dark:bg-[#17181B] bg-[#F7F7F8] dark:text-gray-50 flex items-center dark:border dark:border-black relative'>
            <nav class="w-10/12 mx-auto mt-0 py-3">
                <div class="flex md:flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2.5">
                    <a href="/" class="flex text-white items-center">
                        <img src={isDark ? Logo : LogoSecondary} class="mr-3 h-8" alt="HypeScout Logo" />
                    </a>
                    <div>
                        <div class={`py-2 px-4 mx-auto max-w-screen-xl md:px-6`}>
                            <div className={`${showMainNav ? 'block' : 'hidden'}  md:block`}>
                                <div class="flex items-center justify-center">
                                    <ul class="mt-0 md:space-x-4 text-sm font-semibold md:flex top-[60px] md:top-0 md:relative right-[15px] shadow md:shadow-none absolute justify-between z-10 bg-slate-50 dark:bg-black px-4 md:dark:bg-[#17181B] md:bg-[#F7F7F8]">
                                        <li className='md:mr-2 my-4 md:my-0 rounded-sm'>
                                            <a href="javascript:void(0)" class="bg-[#202124] bg- px-4 py-2 text-white" aria-current="page">Dashboard</a>
                                        </li>
                                        <li className='mr-2 ml-0 my-4 md:my-0 rounded-sm'>
                                            <a href="javascript:void(0)" class="text-gray-900  px-4 py-2 hover:bg-[#202124] dark:text-[#637381] hover:text-white">Campaign</a>
                                        </li>
                                        <li className='mr-2 my-4 md:my-0 rounded-sm'>
                                            <a href="javascript:void(0)" class="text-gray-900 dark:text-[#637381] px-4 py-2 hover:bg-[#202124] hover:text-white">Hypesocial</a>
                                        </li>
                                        <li className='mr-2 my-4 md:my-0 rounded-sm'>
                                            <a href="javascript:void(0)" class="text-gray-900 dark:text-[#637381] px-4 py-2 hover:bg-[#202124] hover:text-white">Insights</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <ul class="mt-0 space-x-4 text-sm font-medium flex justify-between items-center">
                            <li className='mr-1 md:mr-2'>
                                <a href="javascript:void(0)" class="text-gray-90 dark:text-[#637381] hover:underline" aria-current="page">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                    </svg>
                                </a>
                            </li>
                            <li className='mr-1 md:mr-2'>
                                <button
                                    onClick={handleShowTheme}
                                    class="mt-1 relative text-gray-900 dark:text-[#637381] hover:underline">
                                    {isDark ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                        </svg>}

                                    {/*------------ Theme color Menu---------------- */}
                                    <div className={`${showThemeMenu ? ' block shadow-sm md:shadow-none' : ' hidden'} top-[37px] left-[-55px] dark:bg-[#17181B] bg-[#F7F7F8] py-2 absolute rounded-md z-10`}>
                                        <ul className=''>
                                            <li
                                                onClick={handleIsDark}
                                                className='flex py-2 px-10 dark:hover:text-[#8C87D1] hover:text-[#564FB1] dark:hover:bg-black hover:bg-white mx-1 rounded pl-4 pr-12'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                                </svg> <span className='ml-2'>Dark</span>
                                            </li>
                                            <li
                                                onClick={handleIsLight}
                                                className='flex py-2 pl-4 pr-12 dark:hover:text-[#8C87D1] hover:text-[#564FB1] dark:hover:bg-black hover:bg-white mx-1 rounded'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                                </svg> <span className='ml-2'>Light</span>
                                            </li>
                                            <li
                                                onClick={handleIsDark}
                                                className='flex py-2 pl-4 pr-12 dark:hover:text-[#8C87D1] hover:text-[#564FB1] dark:hover:bg-black hover:bg-white mx-1 rounded'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                                                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                                                </svg> <span className='ml-2'>System</span>
                                            </li>
                                        </ul>
                                    </div>


                                </button>
                            </li>
                            <li className='mr-2 hidden md:block'>
                                <h6 class="text-gray-900 dark:text-[#637381]">Hi, Rakib</h6>
                            </li>
                            <li className='mr-1'>
                                <a href="javascript:void(0)" class="text-gray-900 w-12 h-12 md:w-16 md:h-16 dark:text-white hover:underline">
                                    <img src={Person} alt="" />
                                </a>
                            </li>
                            <li
                                onClick={() => setShowMainNav(!showMainNav)}
                                className='block md:hidden mr-1 md:mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;