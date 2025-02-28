import * as React from "react";
import Emoji, { Emojis } from "components/emoji";
import Design from "./design";
import Gaming from "./gaming";
import Music from "./music";

const Interests = () => {
  return (
    <section className="interests">
      <h2><Emoji name={Emojis.sparkles}/> Interests</h2>
      <Design />
      {/* <Gaming />
      <Music /> */}
    </section>
  )
}

export default Interests;
