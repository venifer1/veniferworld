import React, { useState } from "react";
import "../styles/Skills.css";
import { useParams } from "react-router-dom";
import ContentButton from "./ContentButton";
import SkillsContent from "./SkillsContent";
import NotFound from "./NotFound";

function Skills() {
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const params:any = useParams();
  const numId:number = Number([params.num]);

  switch (numId) {
    case 1:
      return (
        <div id={fadeOut ? "fadeAni" : ""} className="SkillsView">
          <div className="SkillsContent">
            <div className="Left">
              <SkillsContent ContentType={"1"}></SkillsContent>
              <SkillsContent ContentType={"2"}></SkillsContent>
              <SkillsContent ContentType={"3"}></SkillsContent>
              <SkillsContent ContentType={"4"}></SkillsContent>
            </div>
            <div className="Right">
              <SkillsContent ContentType={"5"}></SkillsContent>
              <SkillsContent ContentType={"6"}></SkillsContent>
              <SkillsContent ContentType={"7"}></SkillsContent>
              <SkillsContent ContentType={"8"}></SkillsContent>
            </div>
          </div>
          <div className="SkillsButton">
            <ContentButton buttonType={"next"} updateSetFadeout={setFadeOut}></ContentButton>
          </div>
        </div>
      );
    case 2:
      return (
        <div id={fadeOut ? "fadeAni" : ""} className="SkillsView">
          <div className="SkillsContent2">
            <div className="Left">
              <SkillsContent ContentType={"9"}></SkillsContent>
              <SkillsContent ContentType={"10"}></SkillsContent>
              <SkillsContent ContentType={"11"}></SkillsContent>
              <SkillsContent ContentType={"12"}></SkillsContent>
            </div>
            <div className="Right">
              <SkillsContent ContentType={"13"}></SkillsContent>
            </div>
          </div>
          <div className="SkillsButton">
            <ContentButton buttonType={"prev"} updateSetFadeout={setFadeOut}></ContentButton>
            <ContentButton buttonType={"3"} updateSetFadeout={setFadeOut}></ContentButton>
          </div>
        </div>
      );
    default:
      return (
        <NotFound></NotFound>
      );
  }
  
}

export default Skills;