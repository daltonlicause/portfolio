import React from "react";
import MemojiVideo from "../../assets/imgs/memoji.webm";

const Memoji = () => (
  <video autoPlay loop muted playsInline> 
    <source src={MemojiVideo} type="video/webm"/>
  </video>
)

export default Memoji
