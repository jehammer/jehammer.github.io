import React from 'react';
import '../../css/Header.css';

interface Props {
  title: string;
  subtitle: string;
}

const Header: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Header;
