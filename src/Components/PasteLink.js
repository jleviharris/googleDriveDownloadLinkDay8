import React from "react";

const PasteLink = ({}) => {
  return (
    <div className="pasteLink">
      {" "}
      <h1>Google Drive Link</h1>
      <h2>Paste your google drive file link below</h2>
      <input type="text"></input>
      <button>Generate Direct Download Link</button>
      <div>
        {" "}
        <textarea></textarea>
        <button>Copy</button>
      </div>
    </div>
  );
};

export default PasteLink;
