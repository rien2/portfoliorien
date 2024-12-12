import React from 'react';
import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <ProjectGrid />
      <Footer />
    </div>
  );
}

export default App;