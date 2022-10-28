import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const DocumentTile = ({ title, file, onDownloadClick }) => {
  return (
    <button
      onClick={() => {
        onDownloadClick(file || "/");
      }}
      className="flex items-center h-fit pl-5 pr-6 py-4 rounded-[10px] border border-[5px] border-gold shadow-[10px_10px_40px_rgba(0,0,0,0.25)]"
    >
      {file.contentType === "application/pdf" && (
        <div className="w-[50px] h-[62px] mr-7 flex-shrink-0">
          <StaticImage className="w-full h-full" src={"../../assets/documents/pdf-icon.svg"} alt="pdf icon" />
        </div>
      )}
      <div className="text-left text-[18px] leading-[22px] font-inter font-bold">{title}</div>
    </button>
  );
};

export default DocumentTile;
