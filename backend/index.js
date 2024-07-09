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

//About
let LeaveFirmware = [
  "1. 대다수 펌웨어 개발자를 수요로 하는 직군은 제조업체인데, 거시경제 관점에서 향후 2~30년 간 제조업체의 전망은 개인적으로 좋지 않을 것으로 예상하기 때문입니다.",
  "2. 진입장벽이 높고, 인력이 부족한 펌웨어 개발자에 대한 수요는 상당히 있는 편이나, 제조업체 운영의 핵심인 자재 비용과 최저시급이 상승함에 따라 제조업체는 펌웨어 개발자에 대한 처우를 고려할 여유가 없는 실정입니다.",
  "3. 제조업체의 대세적인 흐름이 과거 유럽에서 동아시아로 넘어오면서 한국이 호황을 누렸으나, 향후에는 제조업체의 대세적인 흐름이 동남아시아로 이동할 것으로 개인적으로 예상하기 때문입니다.",
];
let BecomeWebDev = [
  "1. 대학교 재학 시절부터 웹 개발을 공부했었고, 특히 프론트엔드 개발은 시간이 가는 줄도 모를 만큼 재밌었고 가장 적성에 맞았습니다.",
  "2. 2019년 졸업 직후 PHP 기반의 포트폴리오(개인 커뮤니티 웹 사이트)를 들고 취업전선에 뛰어들어 많은 최종 합격을 받았지만, 처우가 이상과는 괴리가 있어 상대적으로 처우가 괜찮았던 펌웨어 개발자가 되었었습니다.",
  "3. 4년 반의 시간 동안 수많은 펌웨어 프로젝트를 진행하면서 연구소 개발 팀장이 되었으나, 경영악화로 인해 휴식기를 가지게 되었습니다.",
  "4. 쉬면서 예전 웹 개발을 공부할 당시의 즐거움을 다시 느껴보고 싶다는 생각이 들어 웹 개발자가 되기 위한 기량을 끌어올리고 있습니다.",
  "5. 펌웨어 개발자의 이력을 이어갈 수도 있지만, 어쩌면 지금 주어진 이 시간이 웹 개발자가 될 수 있는 마지막 기회라고 생각합니다.",
];
let Motto = [
  "1. '지금 이 힘듦은 내가 비로소 성장하기 위함이다.'",
  "2. '누군가 해냈다면 나 역시 해내지 못할 이유가 없다.'",
  "3. '열심히 하는 것은 당연한 것이고, 잘하는 사람이 되자.'",
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

//About
app.get("/RestApi/LeaveFirmware", (req, res) => {
  res.json(LeaveFirmware);
});
app.get("/RestApi/BecomeWebDev", (req, res) => {
  res.json(BecomeWebDev);
});
app.get("/RestApi/Motto", (req, res) => {
  res.json(Motto);
});

app.listen(port, () => {});
