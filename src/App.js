import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <div>
        <Nav></Nav>
      </div>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
