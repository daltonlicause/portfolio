import React from "react";
import { Link } from "react-router-dom";
import Emoji from "../../../../components/emoji";

const DesignsArray = [
  {
    title: "2nd Street Outpost Merch",
    link: "/2nd-street-outpost-merch",
    desc: "Merchandise designs for 2nd Street Outpost clothing, stickers, and more."
  },
  {
    title: "2nd Street Outpost Branding",
    link: "/2nd-street-outpost-branding",
    desc: "Brand identity and logo for 2nd Street Outpost. A local outdoors sporting goods store that aims to be the destination for adventure gear."
  },
  {
    title: "Heypex Global Branding",
    link: "/heypex-global-branding",
    desc:"Company branding/ identity and logo for Heypex Global. A full service solutions provider that operates in the retailer supplier market."
  }

]

const Design = () => {

  return (
    <div className="sub-section">
      <h3 className="section-headline"><Emoji name="artistPalette"/> Digital Design</h3>
      { 
        DesignsArray.map((item, i) => 
          <div className="sub-item" key={i}>
            <div className="sub-item-headline">
              <Link to={item.link}>{item.title}</Link> 
            </div>
            <p className="sub-item-desc">{item.desc}</p>
          </div>
        )
      }
    </div>
  )
}

export default Design;
