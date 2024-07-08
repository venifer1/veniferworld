import React, { useState } from "react";
import "../styles/About.css";
import ContentButton from "./ContentButton";

function About() {

  const [fadeOut, setFadeOut] = useState(false);

  return (
    <div id={fadeOut ? "fadeAni" : ""} className="AboutView">
      <div className="ProfileHeader">
        <p className="Left">Park Min Gyu</p>
        <p className="Right">DEVELOPER</p>
      </div>
      <div className="AboutContent">

      </div>
      <div className="AboutButton">
        <ContentButton buttonType={"next"} updateSetFadeout={setFadeOut}></ContentButton>
      </div>
    </div>
  );
}

export default About;
