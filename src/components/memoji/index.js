import React from "react";
import MemojiWEBM from "../../assets/videos/memoji.webm";
import MemojiMOV from "../../assets/videos/memoji.mov";

const Memoji = () => (
  <video playsInline autoPlay muted loop> 
    <source src={MemojiMOV} type="video/quicktime"/>
    <source src={MemojiWEBM} type="video/webm"/>
    Sorry, your browser doesn't support embedded videos.
  </video>
)

export default Memoji
