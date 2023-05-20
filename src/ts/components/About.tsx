import React from 'react';
import '../../css/About.css';

interface Props {
  title: string;
  subtitle: string;
  image: string;
  bio: string;
}

const About: React.FC<Props> = ({ title, subtitle, image, bio }) => {
  return (
    <div>
      <div className="about">
        <img src={image} alt="Profile" />
        <div className="header">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <p className="bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
