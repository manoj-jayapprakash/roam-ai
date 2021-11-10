import './App.css';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Clients } from './components/clients/Clients';
import { Features } from './components/features/Features';
import { Engine } from './components/engine/Engine';
import { About } from './components/about/About';
import { Testimonials } from './components/testimonials/Testimonials';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Clients />
      <Fade left>
        <Features />
      </Fade>

      <Slide right>
        <Engine />
      </Slide>

      <Fade left>
        <About />
      </Fade>

      <Slide right>
        <Testimonials />
      </Slide>

      <Fade>
        <Contact />
      </Fade>

      <Footer />
    </div>
  );
}

export default App;
