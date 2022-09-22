import "./App.css";
import React, { useState } from "react";
import PasteLink from "./Components/PasteLink";
import EmbedAudio from "./Components/EmbedAudio";
import EmbedVideo from "./Components/EmbedVideo";

function App() {

  // const [status, setStatus] = useState("Copy");

 
  return (
    <div className="App">
      <h1>Google Direct Download Link Generator</h1>
      <div>
        <ul>
          <li>
            <button>Paste Link</button>
          </li>
          <li>
            <button>Embed Audio</button>
          </li>
          <li>
            <button>Embed Video/Docs</button>
          </li>
        </ul>
        <div>
          <PasteLink />
          {/* <EmbedAudio /> */}
          {/* <EmbedVideo /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
