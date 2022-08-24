import React from 'react';

const MainBody = (props) => {
    const [result, findDataAmount] = props.handleFilterApply()
    console.log(result, findDataAmount);

    console.log(props);
    return (
        <div className='dark:bg-black py-10 dark:text-gray-50 dark:border dark:border-black'>
            <div className='w-10/12 mx-auto'>
                <div className='mb-4'>
                    {findDataAmount ?
                        <h5 className='text-[17px] text-slate-600 dark:text-[#95B3CD]'>Total Data found: <span className='font-semibold'>{findDataAmount}</span></h5> : ''
                    }
                </div>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        result?.length > 0 ? result : <p className='text-xl dark:text-white text-black text-center'> No Searching data available!</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default MainBody;