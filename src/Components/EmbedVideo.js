import React from "react";

const EmbedVideo = ({}) => {
  return (
    <div className="embedVideo">
      {" "}
      <h1>Audio Embed Link</h1>
      <h2>
        If your link was a Video or Document, use the code snippet to embed it on a
        web page.
      </h2>
      <p>Video/Document Embed Link</p>
      <div>
        {" "}
        <textarea></textarea>
        <button>Copy</button>
      </div>
    </div>
  );
};

export default EmbedVideo;
