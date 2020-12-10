import React from "react";

function socialTwitter({ twitter }) {
  console.log("twitter:", twitter);
  return (
    <div id="twitter">
      <h3 id="screenname">@{twitter.user.name}</h3>
      <p id="tweet">{twitter.full_text}</p>
    </div>
  );
}

export default socialTwitter;
