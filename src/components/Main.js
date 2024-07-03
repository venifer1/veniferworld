import React from "react";
import "../styles/Main.css";

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
        <div className="ScrollButton"></div>
      </div>
    </div>
  );
}

export default Main;
