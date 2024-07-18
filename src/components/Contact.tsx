import React, { useLayoutEffect, useState } from "react";
import "../styles/Contact.css";
import BackgroundImg2 from "../assets/images/ContactViewBackground.png";
import ContentButton from "./ContentButton";

function Contact() {

  const [backgroundImgUrl, setBackgroundImgUrl] = useState<string>('');
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useLayoutEffect(() => {
    setBackgroundImgUrl("url(" + BackgroundImg2 + ")");
  }, []);

  return (
    <div id={fadeOut ? "fadeAni" : ""} className="ContactView" style={{backgroundImage: backgroundImgUrl}}>
      <div className="TransparentPlate">
        <div className="ContactThankYou">
          <div className="Left">
            <p className="ThkH">감사합니다.</p>
            <p className="ThkE">Thank you.</p>
            <ContentButton buttonType={"6"} updateSetFadeout={setFadeOut}></ContentButton>
          </div>
          <div className="Right">
            <p className="Name">박민규</p>
            <p className="ContactInfo">Mobile : 010 - 4731 - 8478</p>
            <p className="ContactInfo">Email : venifer1@naver.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
