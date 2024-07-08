import React from "react";
import "../styles/ContentButton.css";
import { useNavigate } from "react-router-dom";

function ContentButton({ buttonType, updateSetFadeout }) {
  const navigate = useNavigate();

  const goButtonTypePrev = () => {

  }
  const goButtonTypeNext = () => {

  }
  const goButtonType1 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/About');
    }, 1000);
  }
  const goButtonType2 = () => {
    navigate('/Skills');
  }
  const goButtonType3 = () => {
    navigate('/Projects');
  }
  const goButtonType4 = () => {
    navigate('/Projects');
  }
  const goButtonType5 = () => {
    navigate('/Contact');
  }

  if (buttonType === "prev") {
    return (
      <button className="contentBtn prev">
        <p className="Top">이전</p>
        <p className="Bottom">PREV</p>
      </button>
    );
  } else if (buttonType === "next") {
    return (
      <button className='contentBtn next'>
        <p className='Top'>다음</p>
        <p className='Bottom'>NEXT</p>
      </button>
    );
  } else if (buttonType === "1") {
    return (
      <button onClick={goButtonType1} className='contentBtn jump'>
        <p className='Top'>소개</p>
        <p className='Bottom'>GO ABOUT ME</p>
      </button>
    );
  } else if (buttonType === "2") {
    return (
      <button onClick={goButtonType2} className='contentBtn jump'>
        <p className='Top'>기술</p>
        <p className='Bottom'>GO SKILLS</p>
      </button>
    );
  } else if (buttonType === "3") {
    return (
      <button onClick={goButtonType3} className='contentBtn jump'>
        <p className='Top'>프로젝트</p>
        <p className='Bottom'>GO PROJECTS</p>
      </button>
    );
  } else if (buttonType === "4") {
    return (
      <button onClick={goButtonType4} className='contentBtn jump'>
        <p className='Top'>주요 프로젝트 2</p>
        <p className='Bottom'>GO PROJECTS 2</p>
      </button>
    );
  } else if (buttonType === "5") {
    return (
      <button onClick={goButtonType5} className='contentBtn jump'>
        <p className='Top'>연락처</p>
        <p className='Bottom'>GO CONTACT</p>
      </button>
    );
  }
}

export default ContentButton;
