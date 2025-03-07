import * as React from "react";
import { EmojiContainer } from "./styled";

export const Emojis = {
  headphone: <>&#127911; </>,
  envelope: <>&#9993;&#65039; </>,
  gamepad: <>&#127918; </>,
  wavingHand: <>&#128075; </>,
  greenCheck: <>&#9989; </>,
  greenCircle: <>&#128994; </>,
  purpleCircle: <>&#128995; </>,
  sparkles: <>&#10024; </>,
  artistPalette: <>&#127912; </>,
  manTechnologist: <>&#128104;&#8205;&#128187; </>,
  leftArrow: <>&#9194;</>,
  rightArrow: <>&#9193;</>,
  shuffle: <>&#128256;</>
}

type EmojisKey = keyof typeof Emojis;
type EmojiValues = typeof Emojis[EmojisKey];

const Emoji = ({ name }: {name: EmojiValues}) => (
  <EmojiContainer>{name}</EmojiContainer>  
)

export default Emoji