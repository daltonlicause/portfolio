import * as React from "react";
import { HeadshotContainer } from './styled'
import HeadshotJPEG from "assets/imgs/headshot.jpeg";

const Headshot = () => (
  <HeadshotContainer>
    <img src={HeadshotJPEG} alt="Dalton's Headshot"/>
  </HeadshotContainer>
)

export default Headshot
