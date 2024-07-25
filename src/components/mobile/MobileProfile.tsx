import React, { useLayoutEffect, useState } from "react";
import MyProfileImage from "../../assets/images/Me.png";
import ProfileContentHeader from "./MobileProfileContentHeader";
import ContentButton from "./MobileContentButton";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
`;
const ProfileView = styled.div`
  width: 100vw;
  height: auto;
  padding: 0px 25px 0px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fcfcfc;
  border-top: solid 20px #0099ef;
  animation: fadeIn 1s forwards;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
  font-family: "Noto Sans KR", sans-serif;
`;
const HeaderTop = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #888888;
  letter-spacing: 8px;
`;
const HeaderBottom = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin-top: -5px;
  color: #000000;
`;
const ProfileContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  margin-top: 20px;
  img {
    width: 262px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;
const ContentCommonInfo = styled.div`
  font-size: ${props => props.id === "little" ? '13px' : '15px'};
  line-height: 1.5em;
  margin-bottom: 30px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function MobileProfile() {

  const [profileImgUrl, setProfileImgUrl] = useState<string>('');
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useLayoutEffect(() => {
    setProfileImgUrl(MyProfileImage);
  }, []);

  let ProfileInfo:string[] = [
    "생년월일 : 1994.09.03",
    "주소 : 부산시 부산진구 당감동",
    "휴대전화 : 010-4731-8478",
    "Email : venifer1@naver.com",
  ];
  let EducationInfo:string[] = [
    "2012 경원고등학교 이과졸업",
    "2013 경성대학교 컴퓨터공학과 입학",
    "2018 경성대학교 소프트웨어학과 전과 (신설)",
    "2019 경성대학교 소프트웨어학과 졸업",
  ];
  let ExperienceInfo:string[] = ["2019.05 ~ 2023.10 (주)티엔에스 근무"];
  let LicenseInfo:string[] = [
    "정보처리기사 (2018.11)",
    "워드프로세서 2급 (2007.02)",
    "ITQ 한글파워포인트 B등급 (2005.11)",
  ];
  let SkillsInfo:string[] = [
    "Language : C, C#(WPF)",
    "Firmware : ARM(Stm32), AVR(Atmega)",
    "Front-End : HTML, CSS, JS, React",
    "Back-End : PHP(CodeIgniter)",
    "ETC : HMI, AWS EC2, Github, MySQL",
  ];
  let AwardInterviewInfo:string[] = [
    "2016 교내 IoT 경진대회 최우수상",
    "2017 교내 창업 경진대회 우수상",
    "2020 자판기공업협회 IoT 기반 무인스토어 인터뷰",
    "2021 자판기공업협회 열차용 멀티자판기 인터뷰",
    "2022 자판기공업협회 대형 멀티자판기 인터뷰",
  ];

  return (
    <>
      <GlobalStyle />
      <ProfileView id={fadeOut ? "fadeAni" : ""}>
        <Header>
          <HeaderTop>DEVELOPER</HeaderTop>
          <HeaderBottom>Park Min Gyu</HeaderBottom>
        </Header>
        <ProfileContent>
          <Content>
            <img src={profileImgUrl} alt=""/>
            <ProfileContentHeader headerName={"PROFILE"}></ProfileContentHeader>
            <ContentCommonInfo>
              {ProfileInfo.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </ContentCommonInfo>
            <div className="Education">
              <ProfileContentHeader headerName={"EDUCATION"}></ProfileContentHeader>
              <ContentCommonInfo>
                {EducationInfo.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </ContentCommonInfo>
            </div>
            <div className="Experience">
              <ProfileContentHeader headerName={"EXPERIENCE"}></ProfileContentHeader>
              <ContentCommonInfo>
                {ExperienceInfo.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </ContentCommonInfo>
            </div>
            <div className="License">
              <ProfileContentHeader headerName={"LICENSE"}></ProfileContentHeader>
              <ContentCommonInfo>
                {LicenseInfo.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </ContentCommonInfo>
            </div>
            <div className="Skills">
              <ProfileContentHeader headerName={"SKILLS"}></ProfileContentHeader>
              <ContentCommonInfo>
                {SkillsInfo.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </ContentCommonInfo>
            </div>
            <div className="AwardInterview">
              <ProfileContentHeader headerName={"AWARD&INTERVIEW"}></ProfileContentHeader>
              <ContentCommonInfo id="little">
                {AwardInterviewInfo.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </ContentCommonInfo>
            </div>
          </Content>
        </ProfileContent>
        <Button>
          <ContentButton buttonType={"1"} updateSetFadeout={setFadeOut}></ContentButton>
        </Button>
      </ProfileView>
    </>
  );
}

export default MobileProfile;
