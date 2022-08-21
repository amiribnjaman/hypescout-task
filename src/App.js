import './App.css';
import 'flowbite';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(true)
  const [isLight, setIsLight] = useState(false)

  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <div className=''>
        <Navbar
          isDark={isDark}
          setIsDark={setIsDark}
          isLight={isLight}
          setIsLight={setIsLight}
        />
        <SearchSection />
        <MainBody />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
