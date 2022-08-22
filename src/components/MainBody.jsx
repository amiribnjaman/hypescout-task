import React, { useEffect, useState } from 'react';
import SinglePersonDetails from './SinglePersonDetails';

const MainBody = ({ search, personDetails }) => {
    

    const searchPerson = personDetails.filter((d) => d.name.toLowerCase().includes(search))

    return (
        <div className='dark:bg-black py-10 dark:text-gray-50 dark:border dark:border-black'>
            <div className='w-10/12 mx-auto'>
                <div className='grid md:grid-cols-3 gap-10'>
                    {searchPerson.length > 0 ? searchPerson.map((person) => <SinglePersonDetails
                        person={person}
                    />) : <h4 className='text-2xl text-center w-full'>No value available!</h4>
                    }

                </div>
            </div>
        </div>
    );
};

export default MainBody;