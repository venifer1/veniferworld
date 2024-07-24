import React from "react";
import styled from "styled-components";

const HeaderCSS = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 5px;
  border-bottom: solid 4px #777777;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

interface IProfileContentHeaderProps {
  headerName: string;
}

function MobileProfileContentHeader({ headerName }:IProfileContentHeaderProps) {
  return <HeaderCSS>{headerName}</HeaderCSS>;
}

export default MobileProfileContentHeader;
