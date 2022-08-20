import './App.css';
import 'flowbite';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App dark">
      <div className='dark:bg-gray-900 dark:text-gray-100'>
      <Navbar />
      <SearchSection />
      <Footer />
      </div>
    </div>
  );
}

export default App;
