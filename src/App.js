import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// New detail pages
import PersonalTraining from './components/PersonalTraining';
import NutritionCoaching from './components/NutritionCoaching';
import OnlinePrograms from './components/OnlinePrograms';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TestimonialsSection />
            <BookingSection />
            <ContactForm />
          </>
        } />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/nutrition-coaching" element={<NutritionCoaching />} />
        <Route path="/online-programs" element={<OnlinePrograms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
