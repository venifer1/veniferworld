import React, { useLayoutEffect, useState } from "react";
import AboutImg from "../../assets/images/Me.png";
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
const AboutView = styled.div`
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
  margin-left: 8px;
  letter-spacing: 8px;
`;
const HeaderBottom = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin-top: -5px;
  color: #000000;
`;
const Content1 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`;
const Content1Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  p {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 10px;
  }
  img {
    width: 262px;
    height: 350px;
    margin-bottom: 15px;
  }
`;
const Content1Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  font-family: "Noto Sans KR", sans-serif;
`;
const ContentTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const ContentDetail = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin-left: 25px;
  margin-bottom: 20px;
`;
const Content2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  p {
    font-family: "Noto Sans KR", sans-serif;
  }
`;
const Content2Info = styled.p`
  font-size: 13px;
  font-weight: 500;
  padding-left: 15px;
  text-indent: -15px;
  margin-left: 15px;
  margin-bottom: 20px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function MobileAbout() {
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const [profileImgUrl, setProfileImgUrl] = useState<string>("");

  useLayoutEffect(() => {
    setProfileImgUrl(AboutImg);
  }, []);

  let LeaveFirmware: string[] = [
    "1. 대다수 펌웨어 개발자를 수요로 하는 직군은 제조업체인데, 거시경제 관점에서 향후 2~30년 간 제조업체의 전망은 개인적으로 좋지 않을 것으로 예상하기 때문입니다.",
    "2. 진입장벽이 높고, 인력이 부족한 펌웨어 개발자에 대한 수요는 상당히 있는 편이나, 제조업체 운영의 핵심인 자재 비용과 최저시급이 상승함에 따라 제조업체는 펌웨어 개발자에 대한 처우를 고려할 여유가 없는 실정입니다.",
    "3. 제조업체의 대세적인 흐름이 과거 유럽에서 동아시아로 넘어오면서 한국이 호황을 누렸으나, 향후에는 제조업체의 대세적인 흐름이 동남아시아로 이동할 것으로 개인적으로 예상하기 때문입니다.",
  ];
  let BecomeWebDev: string[] = [
    "1. 대학교 재학 시절부터 웹 개발을 공부했었고, 특히 프론트엔드 개발은 시간이 가는 줄도 모를 만큼 재밌었고 가장 적성에 맞았습니다.",
    "2. 2019년 졸업 직후 PHP 기반의 포트폴리오(개인 커뮤니티 웹 사이트)를 들고 취업전선에 뛰어들어 많은 최종 합격을 받았지만, 처우가 이상과는 괴리가 있어 상대적으로 처우가 괜찮았던 펌웨어 개발자가 되었었습니다.",
    "3. 4년 반의 시간 동안 수많은 펌웨어 프로젝트를 진행하면서 연구소 개발 팀장이 되었으나, 경영악화로 인해 휴식기를 가지게 되었습니다.",
    "4. 쉬면서 예전 웹 개발을 공부할 당시의 즐거움을 다시 느껴보고 싶다는 생각이 들어 웹 개발자가 되기 위한 기량을 끌어올리고 있습니다.",
    "5. 펌웨어 개발자의 이력을 이어갈 수도 있지만, 어쩌면 지금 주어진 이 시간이 웹 개발자가 될 수 있는 마지막 기회라고 생각합니다.",
  ];
  let Motto: string[] = [
    "1. '지금 이 힘듦은 내가 비로소 성장하기 위함이다.'",
    "2. '누군가 해냈다면 나 역시 해내지 못할 이유가 없다.'",
    "3. '열심히 하는 것은 당연한 것이고, 잘하는 사람이 되자.'",
  ];

  return (
    <>
      <GlobalStyle />
      <AboutView id={fadeOut ? "fadeAni" : ""}>
        <Header>
          <HeaderTop>DEVELOPER</HeaderTop>
          <HeaderBottom>Park Min Gyu</HeaderBottom>
        </Header>
        <Content1>
          <Content1Img>
            <img src={profileImgUrl} alt="" />
            <p>박민규</p>
          </Content1Img>
          <Content1Right>
            <div>
              <ContentTitle>
                ▶ 임베디드 MCU 펌웨어 개발 5년 차 경험
              </ContentTitle>
              <ContentDetail>
                임베디드 MCU 펌웨어 개발 5년 차 경력이 있습니다. 로우레벨인
                C언어를 통해 하드웨어를 직접 제어하여 제품의 동작원리 파악에
                능하고 프로그래밍의 기본기가 탄탄합니다. 오실로스코프, 멀
                티미터, 절연저항기, 내전압기 등 계측장비 사용이 가능하여
                제품개발을 효율적으로 진행할 수 있 습니다. 까다로운 철도규격의
                인증시험과 다수의 KC 인증 및 전자파 시험 통과 경험이 있어 제품
                인증시험 대응이 가능합니다.
              </ContentDetail>
            </div>
            <div>
              <ContentTitle>▶ 폭넓은 개발 스펙트럼</ContentTitle>
              <ContentDetail>
                다수의 IoT 프로젝트 경험을 통해 C, C#-WPF, HTML, CSS,
                JavaScript, PHP, HMI, Database, AWS EC2 등의 개발이 가능할 뿐만
                아니라 최적의 프로토콜을 정의하여 원활한 통신이 가능합니 다.
                로우레벨부터 하이레벨 언어 개발을 모두 경험했기에 협업에 강점이
                있고 개발에 대한 이해도 가 높습니다.
              </ContentDetail>
            </div>
            <div>
              <ContentTitle>▶ 연구소 개발팀장 경험</ContentTitle>
              <ContentDetail>
                능력을 인정받아 4년 차에 연구소 개발팀장 직책을 맡게 되어
                팀원과의 소통과 협업, 프로젝트 기 획과 운영, 문제 해결 및 변수
                대응을 경험하여 팀원들과의 협업에 능하고 프로젝트의 효율적인 진
                행을 도울 수 있습니다.
              </ContentDetail>
            </div>
          </Content1Right>
        </Content1>
        <Content2>
            <div>
              <ContentTitle>▶ 왜 펌웨어를 떠나는가?</ContentTitle>
              <Content2Info>
                {LeaveFirmware.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </Content2Info>
            </div>
            <div>
              <ContentTitle>▶ 왜 웹 개발자가 되고싶은가?</ContentTitle>
              <Content2Info>
                {BecomeWebDev.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </Content2Info>
            </div>
            <div>
              <ContentTitle>▶ 성격의 장단점</ContentTitle>
              <ContentDetail>
                저의 성격은 논리적이고 계획적이며 섬세하고 아주 작은 변화도
                캐치할 수 있을 만큼 꼼꼼하지만, 그만큼 생각이 많은 편이며
                상대적으로 스트레스를 많이 받는 편입니다.
              </ContentDetail>
            </div>
            <div>
              <ContentTitle>▶ 직업관</ContentTitle>
              <Content2Info>
                {Motto.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </Content2Info>
            </div>
        </Content2>
        <Button>
          <ContentButton
            buttonType={"2"}
            updateSetFadeout={setFadeOut}
          ></ContentButton>
        </Button>
      </AboutView>
    </>
  );
}

export default MobileAbout;
