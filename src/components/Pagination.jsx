import React from 'react';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div className='w-full dark:bg-black pt-7 pb-10 dark:text-gray-50'>
            <div className='w-10/12 mx-auto flex justify-center '>
                {/* <div className='flex items-center text-gray-500 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    <span>Privous</span>
                </div> */}
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center space-x-1">
                        {pageNumber.map((number) => 
                            <li key={number}>
                                <button 
                                onClick={()=> paginate(number)}
                                class={`cursor-pointer py-1.5 px-3 rounded-full leading-tight text-gray-100 bg-slate-700 focus:bg-black border border-slate-700 hover:bg-gray-800 hover:text-gray-200 dark:bg-gray-900 dark:focus:bg-gray-600 dark:border-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>{number}
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
                {/* <div className='flex items-center text-gray-500 cursor-pointer'>
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </div> */}

            </div>
        </div>
    );
};

export default Pagination;