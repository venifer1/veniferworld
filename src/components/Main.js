import React from "react";
import "../styles/Main.css";
import ScrollImg from "../assets/images/ScrollBar.png";
import ArrowImg from "../assets/images/Arrow.png";

function Main() {
  return (
    <div className="MainView">
      <div className="TransparentPlate">
        <div className="Greetings">
          <div className="Content1">
            <p>안녕하세요,</p>
          </div>
          <div className="Content2">
            <p className="Left">탑티어 개발자</p>
            <p className="Right">를 꿈꾸는</p>
          </div>
          <div className="Content3">
            <p className="Left">박민규</p>
            <p className="Right">입니다.</p>
          </div>
        </div>
        <div className="ScrollButton">
          <a href="/">
            <p className="Text1">프 로 필</p>
            <p className="Text2">GO PROFILE</p>
            <img className="Img1" src={ScrollImg} alt="" />
            <img className="Img2" src={ArrowImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
