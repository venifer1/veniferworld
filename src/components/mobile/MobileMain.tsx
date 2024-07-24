import React, { useLayoutEffect, useState } from "react";
import ScrollImg from "../../assets/images/ScrollBar.png";
import ArrowImg from "../../assets/images/Arrow.png";
import BackgroundImg from "../../assets/images/MainViewBackground.jpg";
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
      left: 4px;
    }
    50% {
      left: -4px;
    }
    100% {
      left: 4px;
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
  width: 100vw;
  height: calc(100vh - 60px);
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
  padding: 10px;
`;
const Greetings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 20%;
`;
const ContentBottom = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-top: 3%;
`;
const Content1 = styled.div`
  color: #0099ef;
  font-size: 50px;
  font-weight: 700;
  color: #0099ef;
  position: relative;
  animation: move1 0.2s infinite;
  width: 100%;
  text-align: center;
`;
const Content2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
  margin-top: 12%;
`;
const Content2Top = styled.p`
  font-size: 50px;
  font-weight: 700;
  color: #36bc9b;
  position: relative;
  animation: move2 0.5s infinite;
`;
const Content3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin-top: 12%;
`;
const Content3Top = styled.p`
  font-size: 50px;
  font-weight: 700;
  color: #f0e68c;
`;
const ScrollButton = styled.div`
  margin: 0 auto;
  margin-top: 20%;
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
  font-size: 20px;
`;
const ScrollButtonText2 = styled.p`
  color: #aaaaaa;
  font-size: 15px;
`;
const ScrollButtonImg1 = styled.img`
  margin-top: 15px;
  width: 50px;
  height: 50px;
`;
const ScrollButtonImg2 = styled.img`
  width: 30px;
  height: 30px;
`;

function MobileMain() {
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
              <Content2Top>탑티어 개발자</Content2Top>
              <ContentBottom>를 꿈꾸는</ContentBottom>
            </Content2>
            <Content3>
              <Content3Top>박민규</Content3Top>
              <ContentBottom>입니다.</ContentBottom>
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

export default MobileMain;
