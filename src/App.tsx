import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Skills />
    </div>
  );
};

export default App;