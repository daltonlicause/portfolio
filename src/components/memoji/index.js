import React from "react";
import MemojiWEBM from "../../assets/videos/memoji.webm";
import MemojiMOV from "../../assets/videos/memoji.mov";

const Memoji = () => (
  <video autoPlay loop muted playsInline> 
    <source src={MemojiMOV} type="video/quicktime"/>
    <source src={MemojiWEBM} type="video/webm"/>
  </video>
)

export default Memoji
