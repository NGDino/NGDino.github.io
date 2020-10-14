import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'

function App() {
  const [content] = useState(["about", "portfolio", "contactForm", "resume"]);
  const [contentSelected, setContentSelected]= useState(content[0])

  return (
    <div className="App">
      <div>
        <Nav contentSelected={contentSelected}
        setContentSelected={setContentSelected}/>
      </div>
      <main>
        {(contentSelected === "about") && <About/>}
        {(contentSelected === "portfolio") && <Portfolio/>}
        {(contentSelected === "contactForm") && <ContactForm/>}
        {(contentSelected === "resume") && <Resume/>}
      </main>
    </div>
  );
}

export default App;
