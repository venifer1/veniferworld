import React, { useLayoutEffect, useState } from "react";
import MyProfileImage from "../assets/images/Me.png";
import ProfileContentHeader from "./ProfileContentHeader";
import ContentButton from "./ContentButton";
import styled, { createGlobalStyle } from "styled-components";
// import axios from "axios";

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
  width: 1670px;
  height: 953px;
  padding: 0px 50px 0px 50px;
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  font-family: "Noto Sans KR", sans-serif;
`;
const HeaderLeft = styled.p`
  font-size: 80px;
  font-weight: 700;
  color: #000000;
`;
const HeaderRight = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #888888;
  margin-left: 22px;
  margin-bottom: 15px;
  letter-spacing: 8px;
`;
const ProfileContent = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
`;
const Content1 = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0px 20px 0px 20px;
  border-right: solid 5px #777777;
  img {
    margin-bottom: 20px;
  }
`;
const ContentProfileInfo = styled.div`
  font-size: 25px;
  line-height: 1.6em;
`;
const Content2 = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  padding: 0px 20px 0px 20px;
  border-right: solid 5px #777777;
`;
const ContentCommonInfo = styled.div`
  font-size: ${props => props.id === "little" ? '23px' : '25px'};
  line-height: 1.6em;
`;
const Content3 = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  padding: 0px 20px 0px 20px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Profile() {

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

  // REST API CODE
  // const serverAddr = "http://localhost:7979";

  // const profileInfoAddr = serverAddr + "/RestApi/ProfileInfo";
  // const educationInfoAddr = serverAddr + "/RestApi/EducationInfo";
  // const experienceInfoAddr = serverAddr + "/RestApi/ExperienceInfo";
  // const licenseInfoAddr = serverAddr + "/RestApi/LicenseInfo";
  // const skillsInfoAddr = serverAddr + "/RestApi/SkillsInfo";
  // const awardInterviewInfoAddr = serverAddr + "/RestApi/AwardInterviewInfo";
  // const [profileInfoItems, setProfileInfoItems] = useState([]);
  // const [educationInfoItems, setEducationInfoItems] = useState([]);
  // const [experienceInfoItems, setExperienceInfoItems] = useState([]);
  // const [licenseInfoItems, setLicenseInfoItems] = useState([]);
  // const [skillsInfoItems, setSkillsInfoItems] = useState([]);
  // const [awardInterviewInfoItems, setAwardInterviewInfoItems] = useState([]);

  // REST API CODE
  // useEffect(() => {
  //   fetchProfileInfo();
  //   fetchEducationInfo();
  //   fetchExperienceInfo();
  //   fetchLicenseInfo();
  //   fetchSkillsInfo();
  //   fetchAwardInterviewInfo();
  // }, []);

  // const fetchProfileInfo = async () => {
  //   try {
  //     const response = await axios.get(profileInfoAddr);
  //     setProfileInfoItems(response.data);
  //   } catch (error) {
  //     console.error("Error fetchProfileInfo", error);
  //   }
  // };

  // const fetchEducationInfo = async () => {
  //   try {
  //     const response = await axios.get(educationInfoAddr);
  //     setEducationInfoItems(response.data);
  //   } catch (error) {
  //     console.error("Error fetchEducationInfo", error);
  //   }
  // };

  // const fetchExperienceInfo = async () => {
  //   try {
  //     const response = await axios.get(experienceInfoAddr);
  //     setExperienceInfoItems(response.data);
  //   } catch (error) {
  //     console.error("Error fetchExperienceInfo", error);
  //   }
  // };

  // const fetchLicenseInfo = async () => {
  //   try {
  //     const response = await axios.get(licenseInfoAddr);
  //     setLicenseInfoItems(response.data);
  //   } catch (error) {
  //     console.error("Error fetchLicenseInfo", error);
  //   }
  // };

  // const fetchSkillsInfo = async () => {
  //   try {
  //     const response = await axios.get(skillsInfoAddr);
  //     setSkillsInfoItems(response.data);
  //   } catch (error) {
  //     console.error("Error fetchSkillsInfo", error);
  //   }
  // };

  // const fetchAwardInterviewInfo = async () => {
  //   try {
  //     const response = await axios.get(awardInterviewInfoAddr);
  //     setAwardInterviewInfoItems(response.data);
  //   } catch (error) {
  //     console.error("Error fetchAwardInterviewInfo", error);
  //   }
  // };

  return (
    <>
      <GlobalStyle />
      <ProfileView id={fadeOut ? "fadeAni" : ""}>
        <Header>
          <HeaderLeft>Park Min Gyu</HeaderLeft>
          <HeaderRight>DEVELOPER</HeaderRight>
        </Header>
        <ProfileContent>
          <Content1>
            <img src={profileImgUrl} alt=""/>
            <ProfileContentHeader headerName={"PROFILE"}></ProfileContentHeader>
            <ContentProfileInfo>
              {ProfileInfo.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </ContentProfileInfo>
          </Content1>
          <Content2>
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
          </Content2>
          <Content3>
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
          </Content3>
        </ProfileContent>
        <Button>
          <ContentButton buttonType={"1"} updateSetFadeout={setFadeOut}></ContentButton>
        </Button>
      </ProfileView>
    </>
  );
}

export default Profile;
