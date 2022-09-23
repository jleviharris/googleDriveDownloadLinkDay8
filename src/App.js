import "./App.css";
import React, { useState } from "react";
import PasteLink from "./Components/PasteLink";
import EmbedAudio from "./Components/EmbedAudio";
import EmbedVideo from "./Components/EmbedVideo";

function App() {
  const [gLink, setGLink] = useState("");
  const [dLink, setDLink] = useState("Download Link will display here");
  const [eAudio, setEAudio] = useState("Download Link will display here");
  const [eVideo, setEVideo] = useState("Download Link will display here");
  const [hidden, setHidden] = useState(false);
  const [start, setStart] = useState(true);
  const [audio, setAudio] = useState(false);
  const [video, setVideo] = useState(false);
  const [bttn, setBttn] = useState("bttnOn");
  const [bttn2, setBttn2] = useState("bttnOff");
  const [bttn3, setBttn3] = useState("bttnOff");

  const handlePasteLinkButton = () => {
    if (!start) {
      setStart(true);
      setVideo(false);
      setAudio(false);
      setBttn("bttnOn");
      setBttn2("bttnOff");
      setBttn3("bttnOff");
    }
  };
  const handleAudioButton = () => {
    if (!audio) {
      setStart(false);
      setAudio(true);
      setVideo(false);
      setBttn("bttnOff");
      setBttn2("bttnOn");
      setBttn3("bttnOff");
    }
  };
  const handleVideoButton = () => {
    if (!video) {
      setStart(false);
      setAudio(false);
      setVideo(true);
      setBttn("bttnOff");
      setBttn2("bttnOff");
      setBttn3("bttnOn");
    }
  };

  return (
    <div className="App">
      <h1>Google Direct Download Link Generator</h1>
      <div className="block">
        <div className="buttons">
          <button className={bttn} onClick={handlePasteLinkButton}>
            Paste Link
          </button>

          <button className={bttn2} onClick={handleAudioButton}>
            Embed Audio
          </button>

          <button className={bttn3} onClick={handleVideoButton}>
            Embed Video/Docs
          </button>
        </div>
        <div className="pages">
          {start && (
            <PasteLink
              gLink={gLink}
              dLink={dLink}
              setGLink={setGLink}
              setDLink={setDLink}
              setEAudio={setEAudio}
              setEVideo={setEVideo}
            />
          )}
          {audio && <EmbedAudio eAudio={eAudio} />}
          {video && <EmbedVideo eVideo={eVideo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
