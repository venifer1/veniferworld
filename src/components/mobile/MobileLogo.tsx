import React from "react";
import styled from "styled-components";

const LogoView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 126px;
  background-color: #dedede;

  a {
    text-decoration: none;
  }
  p {
    font-family: "Prompt", sans-serif;
    font-size: 35px;
    font-weight: 700;
    color: #0099ef;
  }
  p:hover {
    color: #36bc9b;
    transition: all 0.2s linear;
  }
`;

function MobileLogo() {
  return (
    <LogoView>
      <a href="/"><p>VENIFER</p></a>
      <a href="/"><p>WORLD</p></a>
    </LogoView>
  );
}

export default MobileLogo;
