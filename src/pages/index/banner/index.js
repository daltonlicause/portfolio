import React from "react";
import Memoji from "../../../assets/imgs/memoji.gif";

const Banner = () => {

  return (
    <section className="banner">
      <img className="memoji" alt="Memoji of myself" src={Memoji} width="150px" height="113px"/>
      <h2>&#128075; Hi, I'm <b className="accent">Dalton</b>!</h2>
      <div className="sub-section">
        <p>Full stack developer with a passion for frontend and design.</p>
      </div>
    </section>
  )
}

export default Banner;
