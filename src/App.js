import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Mi Portafolio</h1>
          <nav>
            <a href="/">Inicio</a> | <a href="/about">Acerca de</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
