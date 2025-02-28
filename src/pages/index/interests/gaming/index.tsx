import * as React from "react";
import Emoji, { Emojis } from "components/emoji";

const Gaming = () => {
  return (
    <div className="sub-section">
      <h3 className="section-headline"><Emoji name={Emojis.gamepad}/> Gaming</h3>
      <div className="sub-item">
        <div className="sub-item-headline">
          <a className="purple" href="https://discord.com/users/171386645684289536">Add me on Discord</a>
        </div>
      </div>
      <div className="sub-item">
        <div className="sub-item-headline">
          <h4>Rocket League</h4>
        </div>
        <div className="attr">
          <span className="attr-name">Current Rank:</span>
          <span className="attr-value yellow">Diamond II</span>
        </div>
      </div>
    </div>
  )
}

export default Gaming;
