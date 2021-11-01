import React, { useState, useEffect } from "react";
import find from "lodash/find"
import LoadingBar from "../../../../../components/loadingBar"

const RocketLeague = () => {
  const [rlRank, updateRlRank] = useState();
  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    const getRlData = async () => {
      
      try {
        let response = await fetch('https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/licause?');
        let responseJson = await response.json();
        const objectData = find(responseJson.data.segments, { metadata: { name: "Ranked Doubles 2v2" } })
        const rank = objectData.stats.tier.metadata.name
        updateLoading(false)
        updateRlRank(rank)
       } catch(error) {
        console.error(error);
        updateLoading(false)
      }
    }

    getRlData();
  }, []);

  return (
    <div className="sub-item">
      <h4 className="sub-item-headline" >Rocket League</h4>
      <div className="attr">
        <span className="attr-name">Current Rank:</span>
        <span className={`attr-value yellow ${loading && "loading"}`}>
        { !loading && rlRank && rlRank }
        { loading && !rlRank && <LoadingBar/> } 
        { !loading && !rlRank && "Diamond II" }
        </span>
      </div>
    </div>
  )
}

export default RocketLeague;