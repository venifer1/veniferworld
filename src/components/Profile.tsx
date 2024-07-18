import React, { useLayoutEffect, useState } from "react";
import "../styles/Profile.css";
import MyProfileImage from "../assets/images/Me.png";
import ProfileContentHeader from "./ProfileContentHeader";
import ContentButton from "./ContentButton";
// import axios from "axios";

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
    <div id={fadeOut ? "fadeAni" : ""} className="ProfileView">
      <div className="ProfileHeader">
        <p className="Left">Park Min Gyu</p>
        <p className="Right">DEVELOPER</p>
      </div>
      <div className="ProfileContent">
        <div className="Content1">
          <img src={profileImgUrl} alt=""/>
          <ProfileContentHeader headerName={"PROFILE"}></ProfileContentHeader>
          <div className="ProfileInfo">
            {ProfileInfo.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="Content2">
          <div className="Education">
            <ProfileContentHeader headerName={"EDUCATION"}></ProfileContentHeader>
            <div className="EducationInfo">
              {EducationInfo.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="Experience">
            <ProfileContentHeader headerName={"EXPERIENCE"}></ProfileContentHeader>
            <div className="ExperienceInfo">
              {ExperienceInfo.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="License">
            <ProfileContentHeader headerName={"LICENSE"}></ProfileContentHeader>
            <div className="LicenseInfo">
              {LicenseInfo.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="Content3">
          <div className="Skills">
            <ProfileContentHeader headerName={"SKILLS"}></ProfileContentHeader>
            <div className="SkillsInfo">
              {SkillsInfo.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="AwardInterview">
            <ProfileContentHeader headerName={"AWARD&INTERVIEW"}></ProfileContentHeader>
            <div className="AwardInterviewInfo">
              {AwardInterviewInfo.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ProfileButton">
        <ContentButton buttonType={"1"} updateSetFadeout={setFadeOut}></ContentButton>
      </div>
    </div>
  );
}

export default Profile;
