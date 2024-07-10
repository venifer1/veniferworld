import React, { useEffect, useLayoutEffect, useState } from "react";
import "../styles/About.css";
import AboutImg from "../assets/images/Me.png";
import ContentButton from "./ContentButton";
import { useParams } from "react-router-dom";
import axios from "axios";

function About() {
  const [fadeOut, setFadeOut] = useState(false);
  const { num } = useParams();
  const numId = Number(num);

  const serverAddr = "http://localhost:7979";

  const LeaveFirmwareAddr = serverAddr + "/RestApi/LeaveFirmware";
  const BecomeWebDevAddr = serverAddr + "/RestApi/BecomeWebDev";
  const MottoAddr = serverAddr + "/RestApi/Motto";
  const [LeaveFirmwareItems, setLeaveFirmwareItems] = useState([]);
  const [BecomeWebDevItems, setBecomeWebDevItems] = useState([]);
  const [MottoItems, setMottoItems] = useState([]);

  useEffect(() => {
    fetchLeaveFirmware();
    fetchBecomeWebDev();
    fetchMotto();
  }, []);

  const fetchLeaveFirmware = async () => {
    try {
      const response = await axios.get(LeaveFirmwareAddr);
      setLeaveFirmwareItems(response.data);
    } catch (error) {
      console.error("Error fetchLeaveFirmware", error);
    }
  };

  const fetchBecomeWebDev = async () => {
    try {
      const response = await axios.get(BecomeWebDevAddr);
      setBecomeWebDevItems(response.data);
    } catch (error) {
      console.error("Error fetchBecomeWebDev", error);
    }
  };

  const fetchMotto = async () => {
    try {
      const response = await axios.get(MottoAddr);
      setMottoItems(response.data);
    } catch (error) {
      console.error("Error fetchMotto", error);
    }
  };

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
            <ContentButton buttonType={"next"}></ContentButton>
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
          <div className="AboutContent2">
            <div className="Top">
              <div>
                <p className="Title">▶ 왜 펌웨어를 떠나는가?</p>
                <p className="Content">
                  {LeaveFirmwareItems.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </p>
              </div>
              <div>
                <p className="Title">▶ 왜 웹 개발자가 되고싶은가?</p>
                <p className="Content">
                  {BecomeWebDevItems.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </p>
              </div>
            </div>
            <div className="Bottom">
              <div>
                <p className="Title">▶ 성격의 장단점</p>
                <p className="Content">
                  저의 성격은 논리적이고 계획적이며 섬세하고 아주 작은 변화도
                  캐치할 수 있을 만큼 꼼꼼하지만, 그만큼 생각이 많은 편이며
                  상대적으로 스트레스를 많이 받는 편입니다.
                </p>
              </div>
              <div>
                <p className="Title">▶ 직업관</p>
                <p className="Content">
                  {MottoItems.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="AboutButton">
            <ContentButton
              buttonType={"prev"}
            ></ContentButton>
            <ContentButton
              buttonType={"2"}
              updateSetFadeout={setFadeOut}
            ></ContentButton>
          </div>
        </div>
      );
    default:
      break;
  }
}

export default About;
