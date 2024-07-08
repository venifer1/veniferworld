import React, { useState } from "react";
import "../styles/About.css";
import ContentButton from "./ContentButton";
import AboutImg from "../assets/images/Me.png";
import { useParams } from "react-router-dom";

function About() {
  const [fadeOut, setFadeOut] = useState(false);
  const { num } = useParams();
  const numId = Number(num);

  switch (numId) {
    case 1:
      return (
        <div id={fadeOut ? "fadeAni" : ""} className="AboutView">
          <div className="ProfileHeader">
            <p className="Left">Park Min Gyu</p>
            <p className="Right">DEVELOPER</p>
          </div>
          <div className="AboutContent">
            <div className="Left">
              <img src={AboutImg} alt="" />
              <p>박민규</p>
            </div>
            <div className="Right">
              <div>
                <p className="Title">▶ 임베디드 MCU 펌웨어 개발 5년 차 경험</p>
                <p className="Content">
                  임베디드 MCU 펌웨어 개발 5년 차 경력이 있습니다. 로우레벨인
                  C언어를 통해 하드웨어를 직접 제어하여 제품의 동작원리 파악에
                  능하고 프로그래밍의 기본기가 탄탄합니다. 오실로스코프, 멀
                  티미터, 절연저항기, 내전압기 등 계측장비 사용이 가능하여
                  제품개발을 효율적으로 진행할 수 있 습니다. 까다로운 철도규격의
                  인증시험과 다수의 KC 인증 및 전자파 시험 통과 경험이 있어 제품
                  인증시험 대응이 가능합니다.
                </p>
              </div>
              <div>
                <p className="Title">▶ 폭넓은 개발 스펙트럼</p>
                <p className="Content">
                  다수의 IoT 프로젝트 경험을 통해 C, C#-WPF, HTML, CSS,
                  JavaScript, PHP, HMI, Database, AWS EC2 등의 개발이 가능할
                  뿐만 아니라 최적의 프로토콜을 정의하여 원활한 통신이 가능합니
                  다. 로우레벨부터 하이레벨 언어 개발을 모두 경험했기에 협업에
                  강점이 있고 개발에 대한 이해도 가 높습니다.
                </p>
              </div>
              <div>
                <p className="Title">▶ 연구소 개발팀장 경험</p>
                <p className="Content">
                  능력을 인정받아 4년 차에 연구소 개발팀장 직책을 맡게 되어
                  팀원과의 소통과 협업, 프로젝트 기 획과 운영, 문제 해결 및 변수
                  대응을 경험하여 팀원들과의 협업에 능하고 프로젝트의 효율적인
                  진 행을 도울 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="AboutButton">
            <ContentButton buttonType={"next"} updateSetFadeout={setFadeOut}></ContentButton>
          </div>
        </div>
      );
    case 2:
      return (
        <div id={fadeOut ? "fadeAni" : ""} className="AboutView">
          <div className="ProfileHeader">
            <p className="Left">Park Min Gyu</p>
            <p className="Right">DEVELOPER</p>
          </div>
          <div className="AboutContent">
            <div className="Left">
              <div>
                <p className="Title"></p>
                <p className="Content"></p>
              </div>
              <div>
                <p className="Title"></p>
                <p className="Content"></p>
              </div>
            </div>
            <div className="Right">
              <div>
                <p className="Title"></p>
                <p className="Content"></p>
              </div>
              <div>
                <p className="Title"></p>
                <p className="Content"></p>
              </div>
            </div>
          </div>
          <div className="AboutButton">
            <ContentButton buttonType={"prev"} updateSetFadeout={setFadeOut}></ContentButton>
            <ContentButton buttonType={"2"} updateSetFadeout={setFadeOut} ></ContentButton>
          </div>
        </div>
      );
    default:
  }
}

export default About;
