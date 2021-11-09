import './App.css';

import { Hero } from './components/hero/Hero';
import { Clients } from './components/clients/Clients';
import { Features } from './components/features/Features';
import { Engine } from './components/engine/Engine';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <div className="app container">
      <Hero />
      <Clients />
      <Features />
      <Engine />
      <About />
      <Contact />
    </div>
  );
}

export default App;
