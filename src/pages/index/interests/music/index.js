import React from "react";

const currentRotation = [
  "Kanye West - Donda",
  "Young Thug - Punk"
]

const Music = () => {

  return (
    <div className="sub-section">
      <h3 className="section-headline" >&#127911; Music</h3>
      <div className="sub-item">
        <h4 className="section-headline">Currently on Rotation:</h4>
        {
          currentRotation.map((album, i) => 
            <div className="attr" key={i}>
              <span className="attr-value">{album}</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Music;
