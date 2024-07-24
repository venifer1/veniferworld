import React, { useState } from "react";
import ContentButton from "./MobileContentButton";
import SkillsContent from "./MobileSkillsContent";
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
const SkillsView = styled.div`
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
  font-family: "Noto Sans KR", sans-serif;
`;
const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 20px;
`;
const ContentArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function MobileSkills() {
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  return (
    <>
      <GlobalStyle />
      <SkillsView id={fadeOut ? "fadeAni" : ""}>
        <Content>
          <ContentArea>
            <SkillsContent ContentType={"1"}></SkillsContent>
            <SkillsContent ContentType={"2"}></SkillsContent>
            <SkillsContent ContentType={"3"}></SkillsContent>
            <SkillsContent ContentType={"4"}></SkillsContent>
            <SkillsContent ContentType={"5"}></SkillsContent>
            <SkillsContent ContentType={"6"}></SkillsContent>
            <SkillsContent ContentType={"7"}></SkillsContent>
            <SkillsContent ContentType={"8"}></SkillsContent>
            <SkillsContent ContentType={"9"}></SkillsContent>
            <SkillsContent ContentType={"10"}></SkillsContent>
            <SkillsContent ContentType={"11"}></SkillsContent>
            <SkillsContent ContentType={"12"}></SkillsContent>
            <SkillsContent ContentType={"13"}></SkillsContent>
          </ContentArea>
        </Content>
        <Button>
          <ContentButton buttonType={"3"} updateSetFadeout={setFadeOut}></ContentButton>
        </Button>
      </SkillsView>
    </>
  );
}

export default MobileSkills;
