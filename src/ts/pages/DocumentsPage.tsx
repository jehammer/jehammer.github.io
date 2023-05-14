import React, { useState } from 'react';
import PdfViewer from '../components/PDFViewer';
import Navigation from '../components/Navigation';
import '../../css/DocumentsPage.css'

const Navbar: React.FC<{ onSelect: (option: string) => void }> = ({ onSelect }) => {
  const options = ['Joshua Hammer Resume', 'Joshua Hammer MS Cert'];

  return (
    <nav className="d-flex justify-content-center">
      {options.map((option) => (
        <div key={option} className='PDFDiv'>
          <button className="btn btn-primary" onClick={() => onSelect(option)}>{option.replace('Joshua Hammer','')}</button>
        </div>
      ))}
    </nav>
  );
};

const Certifications: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Joshua Hammer Resume'); // Set default option here

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Navigation />
      <Navbar onSelect={handleOptionSelect} />
      <PdfViewer url={`./pdfs/${selectedOption}.pdf`} />
    </>
  );
};

export default Certifications;
