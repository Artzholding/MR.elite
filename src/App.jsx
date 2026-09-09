import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import TarievenPage from './components/TarievenPage';
import BookingForm from './components/BookingForm';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import LanguageProvider from './contexts/LanguageContext';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      setShowCookieBanner(false);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieBanner(false);
  };

  // Check if we should show booking page based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#tarieven') {
        setCurrentPage('tarieven');
      } else if (window.location.hash === '#booking') {
        setCurrentPage('booking');
      } else if (window.location.hash === '#terms') {
        setCurrentPage('terms');
      } else if (window.location.hash === '#privacy') {
        setCurrentPage('privacy');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (currentPage === 'tarieven') {
      return <TarievenPage />;
    }
    
    if (currentPage === 'terms') {
      return <TermsConditions />;
    }
    
    if (currentPage === 'privacy') {
      return <PrivacyPolicy />;
    }
    
    if (currentPage === 'booking') {
      return (
        <div className="min-h-screen bg-black pt-20">
          <BookingForm />
        </div>
      );
    }

    return (
      <>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </>
    );
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <AnimatePresence>
          {loading && <Preloader />}
        </AnimatePresence>
        
        <ScrollProgress />
        
        {currentPage !== 'tarieven' && currentPage !== 'terms' && <Header />}
        {renderPage()}
        {currentPage !== 'tarieven' && currentPage !== 'terms' && <Footer />}
        
        <BackToTop />
        
        <AnimatePresence>
          {showCookieBanner && (
            <CookieBanner 
              onAccept={handleCookieAccept}
              onDecline={() => setShowCookieBanner(false)} 
            />
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

export default App;
