import './App.css';
import 'flowbite';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import SinglePersonDetails from './components/SinglePersonDetails';

function App() {
  const [isDark, setIsDark] = useState(true)
  const [isLight, setIsLight] = useState(false)
  const [search, setSearch] = useState('')
  const [personDetails, setPersonDetails] = useState([])
  const [rangeValue, setRangeValue] = useState(0)
  const [range, setRange] = useState(0)
  const [countryValue, setCountryValue] = useState('')
  const [country, setCountry] = useState('')
  const [showFilter, setShowFilter] = useState(false)

  // States for pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage, setDataPerPage] = useState(3)

  // Pagination calculation
  const indexOfLastPost = currentPage * dataPerPage
  const indexOfFirstPost = indexOfLastPost - dataPerPage
  const currentData = personDetails.slice(indexOfFirstPost, indexOfLastPost)

  // Load the data from json file
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPersonDetails(data))
  }, [])

  // Handle filter apply funciton
  const handleFilterApply = () => {

    // search by name
    const searchPerson = personDetails.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))

    // range filter
    const rangeFilter = personDetails.filter((r) => r.follwers == rangeValue)

    // country filter
    const countryFilter = personDetails.filter((c) => c.location.split(', ')[1].toLowerCase() == countryValue)

    // range and country filter
    const rangeAndCountry = personDetails.filter((rc) => rc.follwers == rangeValue && rc.location.split(', ')[1].toLowerCase() == countryValue)

    let result = [];
    if (rangeAndCountry?.length > 0) {
      result = rangeAndCountry.map((person) => <SinglePersonDetails
        person={person} />)
    } else if (rangeFilter?.length > 0) {
      result = rangeFilter.map((person) => <SinglePersonDetails
        person={person} />)
    } else if (countryFilter?.length > 0) {
      result = countryFilter.map((person) => <SinglePersonDetails
        person={person} />)
    } else if (search && searchPerson?.length > 0) {
      result = searchPerson.map((person) => <SinglePersonDetails
        person={person} />)
    } else {
      result = currentData.map((person) => <SinglePersonDetails
        person={person} />)
    }

    return result
  }


  // Handle filter reset
  const handleFilterReset = () => {
    setRange(0)
    setCountry(null)
    setCountryValue('')
    handleFilterApply(setRangeValue(0))
    setShowFilter(!showFilter)
  }


  // handle paginate next page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  

  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <div className=''>
        <Navbar
          isDark={isDark}
          setIsDark={setIsDark}
          isLight={isLight}
          setIsLight={setIsLight}
        />
        <SearchSection
          personDetails={personDetails}
          setSearch={setSearch}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          setRange={setRange}
          range={range}
          handleFilterApply={handleFilterApply}
          handleFilterReset={handleFilterReset}
          setCountry={setCountry}
          country={country}
          setCountryValue={setCountryValue}
          countryValue={countryValue}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />
        <MainBody
          handleFilterApply={handleFilterApply}
        />
        <Pagination
          dataPerPage={dataPerPage}
          totalData={personDetails.length}
          paginate={paginate}
        />
        <Footer
          isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
