import React from "react";
import "../styles/ContentButton.css";

function ContentButton({ buttonType }) {
  let buttonText;
  if (buttonType === "prev") {
    buttonText = "<p className='Top'>이전</p><p className='Bottom'>PREV</p>";
  } else if (buttonType === "next") {
    buttonText = "<p className='Top'>다음</p><p className='Bottom'>NEXT</p>";
  } else if (buttonType === "1") {
    buttonText =
      "<p className='Top'>소개</p><p className='Bottom'>GO ABOUT ME</p>";
  } else if (buttonType === "2") {
    buttonText =
      "<p className='Top'>기술</p><p className='Bottom'>GO SKILLS</p>";
  } else if (buttonType === "3") {
    buttonText =
      "<p className='Top'>프로젝트</p><p className='Bottom'>GO PROJECTS</p>";
  } else if (buttonType === "4") {
    buttonText =
      "<p className='Top'>주요 프로젝트 2</p><p className='Bottom'>GO PROJECTS 2</p>";
  } else if (buttonType === "5") {
    buttonText =
      "<p className='Top'>연락처</p><p className='Bottom'>GO CONTACT</p>";
  }

  return <button>{buttonText}</button>;
}

export default ContentButton;
