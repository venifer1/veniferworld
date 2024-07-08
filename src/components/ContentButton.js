import React, { useState } from "react";
import "../styles/ContentButton.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ContentButton({ buttonType, updateSetFadeout }) {

  const navigate = useNavigate();

  const { num } = useParams();
  const numId = Number(num);
  const location = useLocation();
  const currentPath = location.pathname;
  const currentPathBuf = currentPath.substring(0, currentPath.lastIndexOf('/'));

  const goButtonTypePrev = () => {
    switch(numId) {
      case 2:
      case 3:
      case 4:
      case 5:
        navigate(currentPathBuf + '/' + Number(numId-1));
      default:
    }
  }
  const goButtonTypeNext = () => {
    switch(numId) {
      case 1:
      case 2:
      case 3:
      case 4:
          navigate(currentPathBuf + '/' + Number(numId+1));
      default:
    }
  }
  const goButtonType1 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/About/1');
    }, 1000);
  }
  const goButtonType2 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/Skills/1');
    }, 1000);
  }
  const goButtonType3 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/Projects/1');
    }, 1000);
  }
  const goButtonType4 = () => {
    navigate('/Projects/3');
  }
  const goButtonType5 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/Contact');
    }, 1000);
  }

  if (buttonType === "prev") {
    return (
      <button onClick={goButtonTypePrev} className="contentBtn prev">
        <p className="Top">이전</p>
        <p className="Bottom">PREV</p>
      </button>
    );
  } else if (buttonType === "next") {
    return (
      <button onClick={goButtonTypeNext} className='contentBtn next'>
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
