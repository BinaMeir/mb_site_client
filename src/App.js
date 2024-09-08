import Home from './homePage/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Recommendations from './pages/Recommendations';
import About from './pages/About';
import Contact from './pages/Contact'
import DesktopNavbar from './pageComponents/DesktopNavbar';
import MobileNavbar from './pageComponents/MobileNavbar';
import IsMobile from './IsMobile';
import HouseArticle from './pages/HouseArticle';
import Footer from './pageComponents/Footer';
import './App.css';

function App() {
  const isMobile = IsMobile();

  return (
    <Router>
      <div className="App">
        <div>
          {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="recommendations" element={<Recommendations />} />
            <Route path="about"  element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="house-rennovation" element={<HouseArticle />} />
          </Routes>
        </div>
        <div className="footer"><Footer /></div>
      </div>
    </Router>
    );
};

export default App;
