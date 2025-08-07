import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ProjectSlider from './components/ProjectSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <ProjectCard />
        <ProjectSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;