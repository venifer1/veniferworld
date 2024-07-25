import React, { useLayoutEffect, useState } from "react";
import BackgroundImg2 from "../../assets/images/ContactViewBackground.png";
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
`;
const ContactView = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: fadeIn 1s forwards;
`;
const TransparentPlate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;
const ThankYou = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  background-color: rgba(0, 153, 239, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ThankYouArea = styled.div`
  height: 100%;
  padding: ${props => props.className === "Top" ? '100px 50px 0px 50px;' : '50px;' }
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.className === "Top" ? 'center;' : 'flex-start;'}
  font-family: 'Noto Sans KR', sans-serif;
`;
const ContentH = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
`;
const ContentE = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #dddddd;
  margin-bottom: 10px;
`;
const ContentN = styled.p`
  font-size: 50px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 15px;
`;
const ContentI = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #f0e68c;
`

function Contact() {

  const [backgroundImgUrl, setBackgroundImgUrl] = useState<string>('');
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useLayoutEffect(() => {
    setBackgroundImgUrl("url(" + BackgroundImg2 + ")");
  }, []);

  return (
    <>
      <GlobalStyle />
      <ContactView id={fadeOut ? "fadeAni" : ""} style={{backgroundImage: backgroundImgUrl}}>
        <TransparentPlate>
          <ThankYou>
            <ThankYouArea className="Top">
              <ContentH>감사합니다.</ContentH>
              <ContentE>Thank you.</ContentE>
              <ContentButton buttonType={"6"} updateSetFadeout={setFadeOut}></ContentButton>
            </ThankYouArea>
            <ThankYouArea>
              <ContentN>박민규</ContentN>
              <ContentI>Mobile : 010 - 4731 - 8478</ContentI>
              <ContentI>Email : venifer1@naver.com</ContentI>
            </ThankYouArea>
          </ThankYou>
        </TransparentPlate>
      </ContactView>
    </>
  );
}

export default Contact;
