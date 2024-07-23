import React from "react";
import NavButton from "./MobileNavButton";
import MobileLogo from "./MobileLogo";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Menu from "../../assets/images/Menu.png";
import Close from "../../assets/images/Close.png";

const NavView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: evenly-between;
  align-items: center;
  width: 100vw;
  height: 60px;
  padding: 10px 20px 10px 20px;
  background-color: #303030;
`;
const LeftMenu = styled.div`
  width: 25px;
  height: 25px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CenterLink = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  a {
    font-family: "Prompt", sans-serif;
    color: #0099ef;
    text-decoration: none;
  }
`;
const RightMenu = styled.div`
  width: 25px;
  height: 25px;
`;
const NavButtonView = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgba(0,0,0, 0.8);
`;
const NavButtonBox = styled.div`
    width: 250px;
    height: 100vh;
    background-color: #dedede;
`;
const NavCloseBox = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: rod;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    margin-top: 15px;
    margin-left: 15px;
    img {
        width: 40px;
        height: 40px;
    }
`;

function MobileNav() {
  const location: any = useLocation();
  const currentPath: string = location.pathname;
  let currentPathBuf: string;

  if (currentPath.lastIndexOf("/") !== 0) {
    currentPathBuf = currentPath.substring(1, currentPath.indexOf("/", 1));
  } else {
    currentPathBuf = currentPath.substring(1, currentPath.length);
  }

  const handleOpenClick = (event: any) => {};
  const handleCloseClick = (event: any) => {};

  return (
    <>
      <NavView>
        <LeftMenu onClick={handleOpenClick}>
          <img src={Menu} alt="" />
        </LeftMenu>
        <CenterLink>
          <a href="/">
            <p>V</p>
          </a>
        </CenterLink>
        <RightMenu></RightMenu>
      </NavView>
      <NavButtonView>
        <NavButtonBox>
            <NavButton active={currentPathBuf === "Profile" ? true : false} textH={"프로필"} textE={"PROFILE"} routeName={"Profile"}></NavButton>
            <NavButton active={currentPathBuf === "About" ? true : false} textH={"소개"} textE={"ABOUT ME"} routeName={"About/1"}></NavButton>
            <NavButton active={currentPathBuf === "Skills" ? true : false} textH={"기술"} textE={"SKILLS"} routeName={"Skills/1"}></NavButton>
            <NavButton active={currentPathBuf === "Projects" ? true : false} textH={"프로젝트"} textE={"PROJECTS"} routeName={"Projects/1"}></NavButton>
            <NavButton active={currentPathBuf === "Contact" ? true : false} textH={"연락처"} textE={"CONTACT"} routeName={"Contact"}></NavButton>
        </NavButtonBox>
        <NavCloseBox onClick={handleCloseClick}>
            <img src={Close} alt="" />
        </NavCloseBox>
      </NavButtonView>
    </>
  );
}

export default MobileNav;
