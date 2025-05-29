import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Tickets from './pages/Tickets';
import CosplayGallery from './pages/CosplayGallery';
import PaineisGallery from './pages/PaineisGallery';
import GamesGallery from './pages/GamesGallery';
import ArtGallery from './pages/ArtGallery';
import WorkshopsGallery from './pages/WorkshopsGallery';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/cosplay" element={<CosplayGallery />} />
            <Route path="/gallery/paineis" element={<PaineisGallery />} />
            <Route path="/gallery/games" element={<GamesGallery />} />
            <Route path="/gallery/art" element={<ArtGallery />} />
            <Route path="/gallery/workshops" element={<WorkshopsGallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
