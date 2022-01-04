import React from "react";
import Emoji from "../../../components/emoji";
import Design from "./design";
import Gaming from "./gaming";
import Music from "./music";

const Interests = () => {
  return (
    <section className="interests">
      <h2><Emoji name="sparkles"/> Interests</h2>
      <Design />
      {/* <Gaming />
      <Music /> */}
    </section>
  )
}

export default Interests;
