import './App.css';

import { Hero } from './components/hero/Hero';
import { Clients } from './components/clients/Clients';
import { Features } from './components/features/Features';
import { Engine } from './components/engine/Engine';

function App() {
  return (
    <div className="app container">
      <Hero />
      <Clients />
      <Features />
      <Engine />
    </div>
  );
}

export default App;
