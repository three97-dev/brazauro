import React, { useRef, useState } from "react";

const FileUpload = ({ name, accept, onChange }) => {
  const actualBtnRef = useRef(null);
  const [fileName, setFileName] = useState("No file chosen");

  return (
    <div className="flex items-center justify-between w-full">
      <input
        type="file"
        id="actual-btn"
        name={name}
        accept={accept}
        hidden
        ref={actualBtnRef}
        onChange={(event) => {
          setFileName(actualBtnRef.current.files[0].name);
          onChange(event.target.files[0]);
        }}
      />
      <span id="file-chosen" className="italic">
        {fileName}
      </span>
      <label htmlFor="actual-btn" className="bg-gray-gold px-6 py-3 cursor-pointer">
        <h5 className="text-[18px] leading-[22px] font-inter font-bold text-gold">Choose File</h5>
      </label>
    </div>
  );
};

export default FileUpload;
