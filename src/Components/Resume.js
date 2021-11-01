import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import resume from '../assets/resume.pdf';

export default function Resume() {
  return (
    <div className="grid place-items-center h-auto p-5 bg-white dark:bg-gray-600 ">
      <Document
        className="ring ring-yellow-300 border-4 border-blue-500 rounded-md"
        file={resume}
      >
        <Page height={900} width={700} pageNumber={1} />
      </Document>
    </div>
  );
}
