import React from 'react';
import '../../css/App.css';
import Projects from '../components/Projects';
import Header from '../components/Header'
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
      <Header title="Joshua Hammer" subtitle="Software Developer" />
      <About
        image="./images/RoundFace.png"
        bio="Hey pardon the messiness here, still learning, exploring, and designing!"
      />
      <Projects projects={projects} />
    </div>
  );
}

export default HomePage;