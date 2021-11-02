import React from "react";
import Emoji from "../../../../components/emoji";

const Gaming = () => {
  return (
    <div className="sub-section">
      <h3 className="section-headline"><Emoji name="gamepad"/> Gaming</h3>
      <div className="sub-item">
        <a className="sub-item-headline purple" href="https://discord.com/users/171386645684289536">Add me on Discord</a>
      </div>
      <div className="sub-item">
        <h4 className="sub-item-headline">Rocket League</h4>
        <div className="attr">
          <span className="attr-name">Current Rank:</span>
          <span className="attr-value yellow">Diamond II</span>
        </div>
      </div>
    </div>
  )
}

export default Gaming;
