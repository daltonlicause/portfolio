import * as React from "react";
import Emoji, { Emojis } from "components/emoji";

const About = () => {

  return (
    <article className="about">
      <h2><Emoji name={Emojis.wavingHand}/> Hi, I'm <b className="accent">Dalton</b>!</h2>
      <section className="sub-section">
        <p className="section-headline">A full-stack software engineer based in Northwest Arkansas with over 9 years of hands-on experience. I’m passionate about crafting pixel-perfect front-end applications and have the technical expertise to build scalable back-end services.</p>
      </section>
      <section className="sub-section">
        <p className="section-headline">I consider myself a largely self-taught developer, though I’m grateful to the talented teammates I’ve worked with who’ve inspired and challenged me to grow. My technical skill set includes languages and frameworks like JavaScript/ TypeScript, React.js, Node.js, Ruby, PHP, CSS, HTML, and more.</p>
      </section>
      <section className="sub-section">
        <p className="section-headline">I’m passionate about working on projects that are both exciting and impactful! If you think I can contribute to your success, don’t hesitate to reach out.</p>
      </section>
    </article>
  )
}

export default About;
