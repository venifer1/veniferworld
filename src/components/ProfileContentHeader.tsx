import React from "react";
import "../styles/ProfileContentHeader.css";

interface IProfileContentHeaderProps {
  headerName: string;
}

function ProfileContentHeader({ headerName }:IProfileContentHeaderProps) {
  return <p className="HeaderCSS">{headerName}</p>;
}

export default ProfileContentHeader;
