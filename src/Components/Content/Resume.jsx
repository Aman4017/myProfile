import React from "react";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Resume() {
  return (
    <div className="dark:bg-slate-900 min-h-screen flex flex-col items-center py-8">
      {/* Download Button */}
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        className="text-white bg-fuchsia-600 hover:bg-fuchsia-800 py-2 px-4 rounded mb-4 flex flex-row items-center"
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>

      {/* PDF Viewer */}
      <div className="flex justify-center w-full px-4">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <div
            className="bg-white rounded-lg overflow-auto"
            style={{ width: "100%", maxWidth: "900px" }}
          >
            <Viewer fileUrl={pdf} />
          </div>
        </Worker>
      </div>

      {/* Second Download Button */}
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        className="text-white bg-fuchsia-600 hover:bg-fuchsia-800 py-2 px-4 rounded mt-4 flex flex-row items-center"
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
    </div>
  );
}

export default Resume;
