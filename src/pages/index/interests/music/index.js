import React from "react";
import Emoji from "../../../../components/emoji";

const currentRotation = [
  {
    name: "Kanye West - Donda",
    href: ""
  },
  {
    name: " Young Thug - Punk",
    href: ""
  }
  
  
]

const Music = () => {

  return (
    <div className="sub-section">
      <h3 className="section-headline" ><Emoji name="headphone"/> Music</h3>
      <div className="sub-item">
        <h4 className="sub-item-headline">Currently on Rotation</h4>
        {
          currentRotation.map((album, i) => 
            <div className="attr" key={i}>
              <a href={album.href} className="attr-value purple">{album.name}</a>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Music;
