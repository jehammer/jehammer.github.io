import React from 'react';
import '../css/App.css';
import Projects from './Projects';
import Header from './Header'
import About from './About'
import Navigation from './Navigation'


interface Project {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    name: 'BOKBot',
    description: 'A Discord bot written in Python making use of Discord.py, and MongoDB to manage rosters and statistics for guild members.',
    imageUrl: './images/kynareth.png',
    projectUrl: 'https://github.com/jehammer/BOKBot',
  },
];

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header title="Joshua Hammer" subtitle="Software Developer" />
      <About
        image="./images/RoundFace.png"
        bio="Hey pardon the messiness here, still learning, exploring, and designing!"
      />
      <Projects projects={projects} />
    </div>
  );
}

export default App;



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
