// import React from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// const ResumeViewer = () => {
//   const pdfUrl = 'YOUR_GOOGLE_DRIVE_PDF_LINK';

//   return (
//     <div style={{ height: '500px' }}>
//       <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
//         <Viewer fileUrl={pdfUrl} />
//       </Worker>
//     </div>
//   );
// };

// export default ResumeViewer;

import React from 'react';

const MyResume = () => {
  const resumePdfLink = 'https://drive.google.com/file/d/1C50XM-qbfwAXYUAKQUTIxU5N9GK6jQiz/view?usp=drive_link';

  return (
    <div>
      <h2>Resume</h2>
      <iframe
        title="Resume PDF"
        src={`https://drive.google.com/file/d/${resumePdfLink.split('/')[5]}/preview`}
        width="100%"
        height="500px"
      ></iframe>
    </div>
  );
};

export default MyResume;

