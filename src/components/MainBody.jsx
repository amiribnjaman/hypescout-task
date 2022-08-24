import React from 'react';

const MainBody = ({ handleFilterApply }) => {

    return (
        <div className='dark:bg-black py-10 dark:text-gray-50 dark:border dark:border-black'>
            <div className='w-10/12 mx-auto'>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        handleFilterApply()?.length > 0 ? handleFilterApply() : <p className='text-2xl dark:text-white text-black text-center'> No data available!</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default MainBody;