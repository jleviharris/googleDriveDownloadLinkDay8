import React, { useState } from "react";

const PasteLink = ({}) => {
  const [gLink, setGLink] = useState("");
  const [dLink, setDLink] = useState("Download Link will display here");
  const [status, setStatus] = useState("copy");

  const generateLink = (e) => {
    e.preventDefault();
    const confirmLink = gLink.includes("https://drive.google.com/file/d/");
    if (confirmLink) {
      const tempDLink = gLink
        .replace(
          "https://drive.google.com/file/d/",
          "https://drive.google.com/uc?export=download&id="
        )
        .replace("/view?usp=sharing", "");
      setDLink(tempDLink);
    } else alert("Please enter a google link");
  };
  const textChange = (e) => {
    setGLink(e.target.value);
  };

  return (
    <div className="pasteLink">
      {" "}
      <h1>Google Drive Link</h1>
      <h2>Paste your google drive file link below</h2>
      <input value={gLink} onChange={(e) => textChange(e)}></input>
      <button onClick={generateLink}>Generate Direct Download Link</button>
      <div>
        {" "}
        <textarea readOnly value={dLink}></textarea>
        <button
          className="bttn"
          onClick={(e) => {
            navigator.clipboard.writeText(dLink);
            e.preventDefault();
            setStatus("Copied");
          }}
        >
          {status}
        </button>
      </div>
    </div>
  );
};

export default PasteLink;
