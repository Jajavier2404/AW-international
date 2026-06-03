import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SystemsPage from './pages/SystemsPage';
import SystemDetailPage from './pages/SystemDetailPage';
import MarketsPage from './pages/MarketsPage';
import FAQsPage from './pages/FAQsPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/systems" element={<SystemsPage />} />
        <Route path="/systems/:systemId" element={<SystemDetailPage />} />
        <Route path="/markets" element={<MarketsPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;