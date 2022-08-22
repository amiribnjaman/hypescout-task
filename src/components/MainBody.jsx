import React, { useEffect, useState } from 'react';
import SinglePersonDetails from './SinglePersonDetails';

const MainBody = ({ search, personDetails, rangeValue, handleFilterApply }) => {

    let searchPerson = personDetails.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
    const rangeFilter = personDetails.filter((r) => r.follwers == rangeValue)

    return (
        <div className='dark:bg-black py-10 dark:text-gray-50 dark:border dark:border-black'>
            <div className='w-10/12 mx-auto'>
                <div className='grid md:grid-cols-3 gap-10'>
                    {rangeFilter.length > 0 ? rangeFilter.map((person) => <SinglePersonDetails
                        person={person}
                    />) : searchPerson.map((person) => <SinglePersonDetails
                        person={person}
                    />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainBody;