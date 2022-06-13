import React from "react";
import Emoji from "../../../components/emoji";

const About = () => {

  return (
    <section className="about">
      <h2><Emoji name="wavingHand"/> Hi, I'm <b className="accent">Dalton</b>!</h2>
      <div className="sub-section">
        <p className="section-headline">Welcome to my portfolio! I am a full stack software engineer from Northwest Arkansas with 6+ years of hands-on experience. I have a passion for creating pixel perfect front-end applications with the technical ability to build scalable back-end services.</p>
      </div>
      <div className="sub-section">
        <p className="section-headline">I consider myself a self-taught developer, but owe some of my knowledge to the talented teammates I’ve worked with in the past who’ve pushed me to grow. My technical skills include programming languages and frameworks such as JavaScript, React, NodeJS, Ruby, PHP, CSS, HTML, and much more.</p>
      </div>
      <div className="sub-section">
        <p className="section-headline">I love doing work that is exciting and meaningful! Feel free to reach out if you think I can play a role in your future success.</p>
      </div>
    </section>
  )
}

export default About;
