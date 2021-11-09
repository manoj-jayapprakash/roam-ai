import './App.css';

import { Hero } from './components/hero/Hero';
import { Clients } from './components/clients/Clients';
import { Features } from './components/features/Features';
import { Engine } from './components/engine/Engine';
import { About } from './components/about/About';
function App() {
  return (
    <div className="app container">
      <Hero />
      <Clients />
      <Features />
      <Engine />
      <About />
    </div>
  );
}

export default App;
