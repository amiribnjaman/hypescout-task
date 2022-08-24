import React, { useState } from 'react';

const SearchSection = ({ personDetails, range, setSearch, setRangeValue, setRange, handleFilterReset, country, setCountry, setCountryValue }) => {
    const [showFilter, setShowFilter] = useState(false)
    const [showToolTip, setShowToolTip] = useState(false)

    // Active the filter apply btn
    const applyFilterBtn = () => {
        setRangeValue(range)
        setCountryValue(country)
    }

    // Handle tooltip show
    const handleShowTooltip = () => {
        setShowToolTip(true)
    }

    // Handle tooltip remove
    const handleRemoveTooltip = () => {
        setShowToolTip(false)
    }

    return (
        <div className=' overflow-x-none dark:bg-black pt-8 dark:border dark:border-black'>
            <div className=' w-10/12 dark:bg-[#17181B] bg-[#F7F7F8] mx-auto md:flex items-center justify-around py-4 px-4 md:px-0 '>
                <h3 className='dark:text-white text-black text-2xl md:text-xl font-semibold pl-2'>Profile ({personDetails.length})</h3>
                <div className='md:w-8/12 my-4 md:my-0 px-2 md:px-0'>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="text" id="simple-search" class=" dark:bg-[#202124] bg-slate-50 border border-[#DBDBDB] dark:border-[#323246] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-3 p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Profile" required />
                    </div>

                </div>
                <div className='mx-auto md:mx-0 relative'>
                    <button
                        onClick={() => setShowFilter(!showFilter)}
                        style={{ margin: '0 auto' }} type="button" class=" text-white bg-[#564FB1] flex items-center justify-around focus:ring-4  focus:ring-[#19191b] font-medium rounded-lg text-sm px-5 py-3 mr-3 md:mr-2 hover:bg-[#564FB1] focus:outline-none 
                    dark:focus:ring-[#5148c7]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                        </svg>
                        <span className='px-2 py-1 md:py-0 font-semibold'>Advanced Filter</span>
                    </button>

                    {/*-------------------- Filter box ---------------------*/}
                    <div className={`${showFilter ? 'block shadow-sm md:shadow-none' : ' hidden'} dark:bg-[#17181B] bg-[#F7F7F8] px-4 py-2 absolute dark:shadow-md shadow-lg border border-slate-200 dark:border-slate-800 top-[75px] left-[-27px] md:top-[70px] md:left-[-130px] rounded-md z-10 w-80`}>
                        <h3 className=' text-md font-semibold dark:text-white text-black pb-3'>Filter Options</h3>
                        <hr className='pb-2' />
                        <div className='mb-2'>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Influencer’s industry</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected="">Select Options</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Influencer’s Country</label>
                            <select
                                onChange={(e) => setCountry(e.target.value)}
                                id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected="" value="">Select Options</option>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="india">India</option>
                                <option value="france">France</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Audience’s Country</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected="">Select Options</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Influencer’s Social Media Platform</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected="">Select Options</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Influencer’s Social Media Platform</label>

                            {/*---------------- Tooltip---------------*/}
                            <div className='flex justify-center'>
                                <div class={`${showToolTip ? ' -opacity-10' : 'opacity-5 '} inline-block relative w-[35px] top-[5px] z-10 mx-auto text-center py-2 px-3 text-sm font-medium text-white bg-[#564FB1] rounded-lg shadow-sm tooltip `}>
                                    {range}
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </div>

                            <div>
                                <input
                                    onMouseEnter={handleShowTooltip}
                                    onMouseLeave={handleRemoveTooltip}
                                    onChange={(e) => setRange(e.target.value)}
                                    id="small-range" type="range" value={range} class="w-full h-1 text-[#564FB1] bg-[#564FB1] rounded-lg appearance-[#564FB1] cursor-pointer" />
                            </div>



                            <div class="w-full flex text-[#565D69] justify-between text-xs px-2" >
                                <span>1k</span>
                                <span>15k</span>
                                <span>30k</span>
                                <span>45k</span>
                                <span>60k</span>
                                <span>75k</span>
                                <span>90k</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Influencer’s Gender </label>
                            <div className='flex'>
                                <div class="flex w-1/2 items-center mr-4">
                                    <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-[#564FB1] border-[#564FB1] focus:ring-[#564FB1] dark:ring-offset-gray-800 focus:ring-1 dark:border-[#564FB1]" checked />
                                    <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" checked>Male</label>
                                </div>
                                <div class="flex w-1/2 items-center mr-4">
                                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-[#564FB1] border-[#564FB1] focus:ring-[#564FB1] dark:ring-offset-gray-800 focus:ring-1 dark:border-[#564FB1]" />
                                    <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className='text-right'>
                            <button
                                onClick={handleFilterReset}
                                type="button" class="text-white bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-gray-900">Reset</button>
                            <button
                                onClick={applyFilterBtn}
                                type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-semibold text-white focus:outline-none bg-[#564FB1] rounded-lg border border-gray-200 hover:bg-[#5952bf] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-[#5e56ce] dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5952bf]">Apply</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;