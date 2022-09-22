import React, { useState } from "react";

const EmbedAudio = ({
  gLink,
  dLink,
  setDLink,
  setGLink,
  eAudio,
  setEAudio,
  eVideo,
  setEVideo,
  start,
  setStart,
  hidden,
  setHidden,
}) => {
  const [status, setStatus] = useState("copy");
  return (
    <div className="embedAudio">
      {" "}
      <h1>Audio Embed Link</h1>
      <h2>
        If your link was an Audio file, use the code snippet to embed it on a
        web page.
      </h2>
      <p>Audio Embed Link</p>
      <div>
        {" "}
        <textarea readOnly value={eAudio}></textarea>
        <button
          className="bttn"
          onClick={(e) => {
            navigator.clipboard.writeText(eAudio);
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

export default EmbedAudio;
