import React from "react";
import { MemojiContainer } from './styled'
import MemojiWEBM from "../../assets/videos/memoji.webm";
import MemojiMOV from "../../assets/videos/memoji.mov";
import MemojiPNG from "../../assets/imgs/memoji.png";

const Memoji = () => (
  <MemojiContainer>
    <video playsInline autoPlay muted loop> 
      <source src={MemojiMOV} type="video/quicktime"/>
      <source src={MemojiWEBM} type="video/webm"/>
      <img src={MemojiPNG} alt="Dalton's Memoji"/>
    </video>
  </MemojiContainer>
)

export default Memoji
