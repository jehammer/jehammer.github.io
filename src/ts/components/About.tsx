import React from 'react';
import '../../css/About.css';

interface Props {
  image: string;
  bio: string;
}

const About: React.FC<Props> = ({ image, bio }) => {
  return (
    <div className="about">
      <img src={image} alt="Profile" />
      <p>{bio}</p>
    </div>
  );
};

export default About;
