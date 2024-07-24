import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #active {
    background-color: #222222;
    cursor: pointer;
    transition: all 0.2s linear;
    p {
      color: #f0e68c;
      transition: all 0.2s linear;
    }
  }
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 10px 0px 10px 0px;
  width: 250px;
  height: 60px;
  background-color: #dedede;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: #222222;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  &:hover p {
    color: #f0e68c;
    transition: all 0.2s linear;
  }
`;
const LeftContent = styled.p`
  color: #000000;
  font-size: 25px;
  margin-left: 25px;
`;
const RightContent = styled.p`
  color: #777777;
  font-size: 17px;
  margin-left: 5px;
`;


interface INavButtonProps {
  updateSetNavOpen: any;
  active: any;
  textH: string;
  textE: string;
  routeName: string;
}

function MobileNavButton({ updateSetNavOpen, active, textH, textE, routeName }: INavButtonProps) {
  const Addr: string = "/" + routeName;
  const navigate: any = useNavigate();

  const goToAddr = () => {
    updateSetNavOpen(false);
    navigate(Addr);
  };

  return (
    <>
      <GlobalStyle />
      <Button id={active ? "active" : ""} onClick={goToAddr}>
        <LeftContent className="left">{textH}</LeftContent>
        <RightContent className="right">{textE}</RightContent>
      </Button>
    </>
  );
}

export default MobileNavButton;
