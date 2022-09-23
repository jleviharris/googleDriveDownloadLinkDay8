import React, { useState } from "react";

const EmbedAudio = ({ eAudio }) => {
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
      <div className="linkBox">
        {" "}
        <input className="eAudio" readOnly value={eAudio} autoFocus ></input>
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
