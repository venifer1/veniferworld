import React, { useLayoutEffect, useState } from "react";
import ScrollImg from "../assets/images/ScrollBar.png";
import ArrowImg from "../assets/images/Arrow.png";
import BackgroundImg from "../assets/images/MainViewBackground.jpg";
import { Link, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #fadeAni {
    animation: fadeOut 1s forwards;
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes move1 {
    0% {
      top: 0;
    }
    50% {
      top: 2px;
    }
    100% {
      top: 0;
    }
  }
  @keyframes move2 {
    0% {
      top: 0;
    }
    50% {
      left: -4px;
    }
    100% {
      top: 0;
    }
  }
  @keyframes move3 {
    0% {
      top: 0;
    }
    50% {
      top: 20px;
    }
    100% {
      top: 0;
    }
  }
`;

const MainView = styled.div`
  width: 1670px;
  height: 953px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const TransparentPlate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 220px;
`;
const Greetings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Noto Sans KR", sans-serif;
`;
const ContentRight = styled.p`
  font-size: 40px;
  font-weight: 300;
  margin-left: 10px;
`;
const Content1 = styled.div`
  color: #ffffff;
  font-size: 60px;
  font-weight: 500;
  &:hover {
    color: #0099ef;
    transition: all 0.1s linear;
    position: relative;
    animation: move1 0.2s infinite;
  }
`;
const Content2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  color: #ffffff;
`;
const Content2Left = styled.p`
  font-size: 80px;
  font-weight: 700;
  &:hover {
    color: #36bc9b;
    transition: all 0.1s linear;
    position: relative;
    animation: move2 0.5s infinite;
  }
`;
const Content3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  color: #ffffff;
`;
const Content3Left = styled.p`
  font-size: 70px;
  font-weight: 700;
  &:hover {
    color: #f0e68c;
    transition: all 0.2s linear;
    transform: scale(1.05);
  }
`;
const ScrollButton = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Noto Sans KR", sans-serif;
    text-decoration: none;

    position: relative;
    animation: move3 1.5s infinite;
  }
`;
const ScrollButtonText1 = styled.p`
  color: #ffffff;
  font-size: 30px;
`;
const ScrollButtonText2 = styled.p`
  color: #aaaaaa;
  font-size: 20px;
`;
const ScrollButtonImg1 = styled.img`
  margin-top: 15px;
  width: 64px;
  height: 64px;
`;
const ScrollButtonImg2 = styled.img`
  width: 40px;
  height: 40px;
`;

function Main() {
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const navigate: any = useNavigate();
  const handleWheelClick = (event: any) => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/Profile");
    }, 1000);
  };

  const [backgroundImgUrl, setBackgroundImgUrl] = useState<string>("");

  useLayoutEffect(() => {
    setBackgroundImgUrl("url(" + BackgroundImg + ")");
  }, []);

  return (
    <>
      <GlobalStyle />
      <MainView id={fadeOut ? "fadeAni" : ""} style={{ backgroundImage: backgroundImgUrl }}>
        <TransparentPlate>
          <Greetings>
            <Content1>
              <p>안녕하세요,</p>
            </Content1>
            <Content2>
              <Content2Left>탑티어 개발자</Content2Left>
              <ContentRight>를 꿈꾸는</ContentRight>
            </Content2>
            <Content3>
              <Content3Left>박민규</Content3Left>
              <ContentRight>입니다.</ContentRight>
            </Content3>
          </Greetings>
          <ScrollButton onWheel={handleWheelClick}>
            <Link to="" onClick={handleWheelClick}>
              <ScrollButtonText1>프 로 필</ScrollButtonText1>
              <ScrollButtonText2>GO PROFILE</ScrollButtonText2>
              <ScrollButtonImg1 src={ScrollImg} alt="" />
              <ScrollButtonImg2 src={ArrowImg} alt="" />
            </Link>
          </ScrollButton>
        </TransparentPlate>
      </MainView>
    </>
  );
}

export default Main;
