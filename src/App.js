import "./App.css";
import React, { useState } from "react";
import PasteLink from "./Components/PasteLink";
import EmbedAudio from "./Components/EmbedAudio";
import EmbedVideo from "./Components/EmbedVideo";

function App() {
  const [gLink, setGLink] = useState("");
  const [dLink, setDLink] = useState("Download Link will display here");
  const [eAudio, setEAudio] = useState("");
  const [eVideo, setEVideo] = useState("");
  const [hidden, setHidden] = useState(false);
  const [start, setStart] = useState(true);
  const [audio, setAudio] = useState(false);
  const [video, setVideo] = useState(false);

  const handlePasteLinkButton = () => {
    if (!start) {
      setStart(true);
      setVideo(false);
      setAudio(false);
    }
  };
  const handleAudioButton = () => {
    if (!audio) {
      setStart(false);
      setAudio(true);
      setVideo(false);
    }
  };
  const handleVideoButton = () => {
    if (!video) {
      setStart(false);
      setAudio(false);
      setVideo(true);
    }
  };

  return (
    <div className="App">
      <h1>Google Direct Download Link Generator</h1>
      <div>
        <ul>
          <li>
            <button onClick={handlePasteLinkButton}>Paste Link</button>
          </li>
          <li>
            <button onClick={handleAudioButton}>Embed Audio</button>
          </li>
          <li>
            <button onClick={handleVideoButton}>Embed Video/Docs</button>
          </li>
        </ul>

        <div>
          {start && (
            <PasteLink
              gLink={gLink}
              dLink={dLink}
              setGLink={setGLink}
              setDLink={setDLink}
              setEAudio={setEAudio}
              eAudio={eAudio}
              eVideo={eVideo}
              setEVideo={setEVideo}
            />
          )}
          {audio && (
            <EmbedAudio
              gLink={gLink}
              dLink={dLink}
              setGLink={setGLink}
              setDLink={setDLink}
              setEAudio={setEAudio}
              eAudio={eAudio}
              eVideo={eVideo}
              setEVideo={setEVideo}
              hidden={hidden}
              setHidden={setHidden}
              setStart={setStart}
              start={start}
            />
          )}
          {video && (
            <EmbedVideo
              gLink={gLink}
              dLink={dLink}
              setGLink={setGLink}
              setDLink={setDLink}
              setEAudio={setEAudio}
              eAudio={eAudio}
              eVideo={eVideo}
              setEVideo={setEVideo}
              hidden={hidden}
              setHidden={setHidden}
              setStart={setStart}
              start={start}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
