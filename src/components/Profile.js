import React from "react";
import "../styles/Profile.css";
import ProfileContentHeader from "./ProfileContentHeader";
import MyProfileImage from "../assets/images/Me.png";

function Profile() {
  return (
    <div className="ProfileView">
      <div className="ProfileHeader">
        <p className="Left">Park Min Gyu</p>
        <p className="Right">DEVELOPER</p>
      </div>
      <div className="ProfileContent">
        <div className="Content1">
          <img src={MyProfileImage} alt="" />
          <ProfileContentHeader headerName={"PROFILE"}></ProfileContentHeader>
          <div className="ProfileInfo">
            <p>생년월일 : 1994.09.03</p>
            <p>주소 : 부산시 부산진구 당감동</p>
            <p>휴대전화 : 010-4731-8478</p>
            <p>Email : venifer1@naver.com</p>
          </div>
        </div>
        <div className="Content2">
          <div className="Education">
            <ProfileContentHeader
              headerName={"EDUCATION"}
            ></ProfileContentHeader>
            <div className="EducationInfo">
              <p>2012 경원고등학교 이과졸업</p>
              <p>2013 경성대학교 컴퓨터공학과 입학</p>
              <p>2018 경성대학교 소프트웨어학과 전과 (신설)</p>
              <p>2019 경성대학교 소프트웨어학과 졸업</p>
            </div>
          </div>
          <div className="Experience">
            <ProfileContentHeader
              headerName={"EXPERIENCE"}
            ></ProfileContentHeader>
            <div className="ExperienceInfo">
              <p>2019.05 ~ 2013.10 (주)티엔에스 근무</p>
            </div>
          </div>
          <div className="License">
            <ProfileContentHeader headerName={"LICENSE"}></ProfileContentHeader>
            <div className="LicenseInfo">
              <p>정보처리기사 (2018.11)</p>
              <p>워드프로세서 2급 (2007.02)</p>
              <p>ITQ 한글파워포인트 B등급 (2005.11)</p>
            </div>
          </div>
        </div>
        <div className="Content3">
          <div className="Skills">
            <ProfileContentHeader headerName={"SKILLS"}></ProfileContentHeader>
            <div className="SkillsInfo">
              <p>Language : C, C#(WPF)</p>
              <p>Firmware : ARM(Stm32), AVR(Atmega)</p>
              <p>Front-End : HTML, CSS, JS, React</p>
              <p>Back-End : PHP(CodeIgniter)</p>
              <p>ETC : HMI, AWS EC2, Github, MySQL</p>
            </div>
          </div>
          <div className="AwardInterview">
            <ProfileContentHeader
              headerName={"AWARD&INTERVIEW"}
            ></ProfileContentHeader>
            <div className="AwardInterviewInfo">
              <p>2016 교내 IoT 경진대회 최우수상</p>
              <p>2017 교내 창업 경진대회 우수상</p>
              <p>2020 자판기공업협회 IoT 기반 무인스토어 인터뷰</p>
              <p>2021 자판기공업협회 열차용 멀티자판기 인터뷰</p>
              <p>2022 자판기공업협회 대형 멀티자판기 인터뷰</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ProfileButton"></div>
    </div>
  );
}

export default Profile;
