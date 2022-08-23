import React from 'react';

const Pagination = () => {
    return (
        <div className='w-full dark:bg-black pt-7 pb-10 dark:text-gray-50'>
            <div className='w-10/12 mx-auto flex justify-between '>
                <div className='flex items-center text-gray-500 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    <span>Privous</span>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center space-x-1">
                        <li>
                            <a href="#" class="py-1.5 px-3 rounded-full leading-tight text-gray-100 bg-black border border-black hover:bg-gray-800 hover:text-gray-200 dark:bg-gray-800 dark:border-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" class="py-1.5 px-3 my-4 rounded-full leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" class="py-1.5 px-3 my-4 rounded-full leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" class="py-1.5 px-3 my-4 rounded-full leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#" class="py-1.5 px-3 my-4 rounded-full leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                    </ul>
                </nav>
                <div className='flex items-center text-gray-500 cursor-pointer'>
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </div>

            </div>
        </div>
    );
};

export default Pagination;