import Navbar from './Navbar';
import Hero from './Hero';
import Features from'./Features';
import { BrowserRouter as Router } from 'react-router-dom';
import Testimonials from './Testimonials';
import PricingTab from './PricingTab';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Hero />
          <Features />
          <Testimonials />
          <PricingTab />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
