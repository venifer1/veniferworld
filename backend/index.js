const express = require("express");
const cors = require("cors");
const app = express();
const port = 7979;

app.use(cors());
app.use(express.json());

//Profile
let ProfileInfo = [
  "생년월일 : 1994.09.03",
  "주소 : 부산시 부산진구 당감동",
  "휴대전화 : 010-4731-8478",
  "Email : venifer1@naver.com",
];
let EducationInfo = [
  "2012 경원고등학교 이과졸업",
  "2013 경성대학교 컴퓨터공학과 입학",
  "2018 경성대학교 소프트웨어학과 전과 (신설)",
  "2019 경성대학교 소프트웨어학과 졸업",
];
let ExperienceInfo = ["2019.05 ~ 2023.10 (주)티엔에스 근무"];
let LicenseInfo = [
  "정보처리기사 (2018.11)",
  "워드프로세서 2급 (2007.02)",
  "ITQ 한글파워포인트 B등급 (2005.11)",
];
let SkillsInfo = [
  "Language : C, C#(WPF)",
  "Firmware : ARM(Stm32), AVR(Atmega)",
  "Front-End : HTML, CSS, JS, React",
  "Back-End : PHP(CodeIgniter)",
  "ETC : HMI, AWS EC2, Github, MySQL",
];
let AwardInterviewInfo = [
  "2016 교내 IoT 경진대회 최우수상",
  "2017 교내 창업 경진대회 우수상",
  "2020 자판기공업협회 IoT 기반 무인스토어 인터뷰",
  "2021 자판기공업협회 열차용 멀티자판기 인터뷰",
  "2022 자판기공업협회 대형 멀티자판기 인터뷰",
];

//Profile
app.get("/RestApi/ProfileInfo", (req, res) => {
  res.json(ProfileInfo);
});
app.get("/RestApi/EducationInfo", (req, res) => {
  res.json(EducationInfo);
});
app.get("/RestApi/ExperienceInfo", (req, res) => {
  res.json(ExperienceInfo);
});
app.get("/RestApi/LicenseInfo", (req, res) => {
  res.json(LicenseInfo);
});
app.get("/RestApi/SkillsInfo", (req, res) => {
  res.json(SkillsInfo);
});
app.get("/RestApi/AwardInterviewInfo", (req, res) => {
  res.json(AwardInterviewInfo);
});

app.listen(port, () => {});
