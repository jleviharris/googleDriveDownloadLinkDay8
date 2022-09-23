import React, { useState } from "react";

const EmbedVideo = ({ eVideo }) => {
  const [status, setStatus] = useState("copy");

  return (
    <div className="embedVideo">
      {" "}
      <h1>Video/Document Embed Link</h1>
      <h2>
        If your link was a Video or Document, use the code snippet to embed it
        on a web page.
      </h2>
      <p>Video/Document Embed Link</p>
      <div className="linkBox">
        {" "}
        <input className="eVideo" readOnly value={eVideo} autoFocus></input>
        <button
          className="bttn"
          onClick={(e) => {
            navigator.clipboard.writeText(eVideo);
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

export default EmbedVideo;
