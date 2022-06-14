import React from "react";
import MemojiWEBM from "../../assets/videos/memoji.webm";
import MemojiMOV from "../../assets/videos/memoji.mov";
import MemojiPNG from "../../assets/imgs/memoji.png";

const Memoji = () => (
  <video playsInline autoPlay muted loop> 
    <source src={MemojiWEBM} type="video/webm"/>
    <source src={MemojiMOV} type="video/quicktime"/>
    <img src={MemojiPNG} alt="Dalton's Memoji"/>
  </video>
)

export default Memoji
