import React from 'react';
import '../../css/App.css';
import Projects from '../components/Projects';
import About from '../components/About'
import Navigation from '../components/Navigation'


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
  {
    name: 'Personal Website',
    description: 'The very website you are on now! Built using React TypeScript for me to experiment around with React Web Development.',
    imageUrl: './images/MyRobo.png',
    projectUrl: 'https://github.com/jehammer/jehammer.github.io',
  },
];

function HomePage() {
  return (
    <div className="main">
      <Navigation />
      <About
        image="./images/RoundFace.png"
        bio="A passionate software developer dedicated to learning and producing quality code."
        title="Joshua Hammer" 
        subtitle="Software Developer"
      />
      <Projects projects={projects} />
    </div>
  );
}

export default HomePage;