import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [content] = useState(["about", "portfolio", "contactForm", "resume"]);
  const [contentSelected, setContentSelected]= useState(content[0])

  return (
    <div className="App">
      <header>
        <Nav contentSelected={contentSelected}
        setContentSelected={setContentSelected}
        className="margin-bottom-small"/>
      </header>
      <main>
        <About/>
        <Portfolio/>
        <ContactForm/>
        <Resume/>
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
