import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import resume from '../assets/resume.pdf';

export default function Resume() {
  return (
    <div className="grid place-items-center h-screen">
      <Document
        className="ring ring-yellow-300 border-4 border-blue-500"
        file={resume}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
