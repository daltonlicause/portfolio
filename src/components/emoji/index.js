import React from "react";
import { EmojiContainer } from "./styled";

const Emojis = {
  headphone: <>&#127911; </>,
  envelope: <>&#9993;&#65039; </>,
  gamepad: <>&#127918; </>,
  wavingHand: <>&#128075; </>,
  greenCheck: <>&#9989; </>,
  greenCircle: <>&#128994; </>,
  purpleCircle: <>&#128995; </>,
  sparkles: <>&#10024; </>,
  artistPalette: <>&#127912; </>,
  manTechnologist: <>&#128104;&#8205;&#128187; </>
}

const Emoji = ({name}) => (
  <EmojiContainer>{Emojis[name]}</EmojiContainer>  
)

export default Emoji