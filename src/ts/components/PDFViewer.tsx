import React from 'react';

const PdfViewer: React.FC<{ url: string }> = ({ url }) => {
  return (
    <object data={url} type="application/pdf" width="100%" height="800">
      <p>
        Your browser doesn't support PDFs. <a href={url}>Download the PDF</a> instead.
      </p>
    </object>
  );
};

export default PdfViewer;
