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
];

function HomePage() {
  return (
    <div className="main">
      <Navigation />
      <About
        image="./images/RoundFace.png"
        bio="This page may be basic now, but just you wait!"
        title="Joshua Hammer" 
        subtitle="Software Developer"
      />
      <Projects projects={projects} />
    </div>
  );
}

export default HomePage;