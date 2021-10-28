import React from "react";
import Design from "./design";
import Gaming from "./gaming";
import Music from "./music";

const Interests = () => {
  return (
    <section className="interests">
      <h2>&#10024; Interests</h2>
      <Gaming />
      <Music />
      <Design />
    </section>
  )
}

export default Interests;
