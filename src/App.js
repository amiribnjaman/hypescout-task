import './App.css';
import 'flowbite';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import { useEffect, useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(true)
  const [isLight, setIsLight] = useState(false)
  const [search, setSearch] = useState('')
  const [personDetails, setPersonDetails] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPersonDetails(data))
  }, [])

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
          setSearch={setSearch} />
        <MainBody
          search={search}
          personDetails={personDetails}
        />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
