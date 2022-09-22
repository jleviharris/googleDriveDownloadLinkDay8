import React, { useState } from "react";

const PasteLink = ({
  gLink,
  dLink,
  setDLink,
  setGLink,
  eAudio,
  setEAudio,
  eVideo,
  setEVideo,
}) => {
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

      // EMBED AUDIO
      const audio1 = '<audio width="300" height="32" controls="controls" src="';
      const audio2 = '" type="audio/mp3"></audio>';

      setEAudio(`${audio1}${tempDLink}${audio2}`);

      // Embed Video
      const getVideoLink = gLink.replace("/view?usp=sharing", "");

      const video1 = '<iframe src="';
      const video2 = '/preview" width="560" height="315"></iframe>';

      setEVideo(`${video1}${getVideoLink}${video2}`);
      console.log(eVideo);
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
