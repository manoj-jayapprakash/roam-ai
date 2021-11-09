import './App.css';

import { Hero } from './components/hero/Hero';
import { Clients } from './components/clients/Clients';
function App() {
  return (
    <div className="app container">
      <Hero />
      <Clients />
    </div>
  );
}

export default App;
