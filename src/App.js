import './App.css';
import 'flowbite';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(true)
  console.log(isDark);
  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <div className=''>
      <Navbar />
      <SearchSection isDark={isDark} setIsDark={setIsDark}/>
      <MainBody />
      <Footer />
      </div>
    </div>
  );
}

export default App;
