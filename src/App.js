import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PersonalTraining from './pages/PersonalTraining';
import NutritionCoaching from './pages/NutritionCoaching';
import OnlinePrograms from './pages/OnlinePrograms';
import Testimonials from './pages/Testimonials';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/personal-training" element={<PersonalTraining />} />
        <Route path="/services/nutrition-coaching" element={<NutritionCoaching />} />
        <Route path="/services/online-programs" element={<OnlinePrograms />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
