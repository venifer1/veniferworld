import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ContentButton from "./ContentButton";
import SkillsContent from "./SkillsContent";
import NotFound from "./NotFound";
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
  font-family: 'Noto Sans KR', sans-serif;
`;
const Content = styled.div`
  width: 100%;
  height: 740px;
  padding: 0px 30px 0px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
`;
const ContentArea = styled.div`
  height: 100%;
  padding: 0px 20px 0px 20px;
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

function Skills() {
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const params:any = useParams();
  const numId:number = Number([params.num]);

  switch (numId) {
    case 1:
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
              </ContentArea>
              <ContentArea>
                <SkillsContent ContentType={"5"}></SkillsContent>
                <SkillsContent ContentType={"6"}></SkillsContent>
                <SkillsContent ContentType={"7"}></SkillsContent>
                <SkillsContent ContentType={"8"}></SkillsContent>
              </ContentArea>
            </Content>
            <Button>
              <ContentButton buttonType={"next"} updateSetFadeout={setFadeOut}></ContentButton>
            </Button>
          </SkillsView>
        </>
      );
    case 2:
      return (
        <>
          <GlobalStyle />
          <SkillsView id={fadeOut ? "fadeAni" : ""}>
            <Content>
              <ContentArea>
                <SkillsContent ContentType={"9"}></SkillsContent>
                <SkillsContent ContentType={"10"}></SkillsContent>
                <SkillsContent ContentType={"11"}></SkillsContent>
                <SkillsContent ContentType={"12"}></SkillsContent>
              </ContentArea>
              <ContentArea>
                <SkillsContent ContentType={"13"}></SkillsContent>
              </ContentArea>
            </Content>
            <Button>
              <ContentButton buttonType={"prev"} updateSetFadeout={setFadeOut}></ContentButton>
              <ContentButton buttonType={"3"} updateSetFadeout={setFadeOut}></ContentButton>
            </Button>
          </SkillsView>
        </>
      );
    default:
      return (
        <NotFound></NotFound>
      );
  }
  
}

export default Skills;
