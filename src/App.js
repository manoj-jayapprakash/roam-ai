import './App.css';

import { Hero } from './components/hero/Hero';
import { Clients } from './components/clients/Clients';
import { Features } from './components/features/Features';
function App() {
  return (
    <div className="app container">
      <Hero />
      <Clients />
      <Features />
    </div>
  );
}

export default App;
