import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import ProfileContentHeader from "./ProfileContentHeader";
import MyProfileImage from "../assets/images/Me.png";
import axios from "axios";

function Profile() {
  const serverAddr = "http://localhost:7979";
  const profileInfoAddr = serverAddr + "/RestApi/ProfileInfo";
  const [profileInfoItems, setProfileInfoItems] = useState([]);
  const educationInfoAddr = serverAddr + "/RestApi/EducationInfo";
  const [educationInfoItems, setEducationInfoItems] = useState([]);
  const experienceInfoAddr = serverAddr + "/RestApi/ExperienceInfo";
  const [experienceInfoItems, setExperienceInfoItems] = useState([]);
  const licenseInfoAddr = serverAddr + "/RestApi/LicenseInfo";
  const [licenseInfoItems, setLicenseInfoItems] = useState([]);
  const skillsInfoAddr = serverAddr + "/RestApi/SkillsInfo";
  const [skillsInfoItems, setSkillsInfoItems] = useState([]);
  const awardInterviewInfoAddr = serverAddr + "/RestApi/AwardInterviewInfo";
  const [awardInterviewInfoItems, setAwardInterviewInfoItems] = useState([]);

  useEffect(() => {
    fetchProfileInfo();
    fetchEducationInfo();
    fetchExperienceInfo();
    fetchLicenseInfo();
    fetchSkillsInfo();
    fetchAwardInterviewInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const response = await axios.get(profileInfoAddr);
      setProfileInfoItems(response.data);
    } catch (error) {
      console.error("Error fetchProfileInfo", error);
    }
  };

  const fetchEducationInfo = async () => {
    try {
      const response = await axios.get(educationInfoAddr);
      setEducationInfoItems(response.data);
    } catch (error) {
      console.error("Error fetchEducationInfo", error);
    }
  };

  const fetchExperienceInfo = async () => {
    try {
      const response = await axios.get(experienceInfoAddr);
      setExperienceInfoItems(response.data);
    } catch (error) {
      console.error("Error fetchExperienceInfo", error);
    }
  };

  const fetchLicenseInfo = async () => {
    try {
      const response = await axios.get(licenseInfoAddr);
      setLicenseInfoItems(response.data);
    } catch (error) {
      console.error("Error fetchLicenseInfo", error);
    }
  };

  const fetchSkillsInfo = async () => {
    try {
      const response = await axios.get(skillsInfoAddr);
      setSkillsInfoItems(response.data);
    } catch (error) {
      console.error("Error fetchSkillsInfo", error);
    }
  };

  const fetchAwardInterviewInfo = async () => {
    try {
      const response = await axios.get(awardInterviewInfoAddr);
      setAwardInterviewInfoItems(response.data);
    } catch (error) {
      console.error("Error fetchAwardInterviewInfo", error);
    }
  };

  return (
    <div className="ProfileView">
      <div className="ProfileHeader">
        <p className="Left">Park Min Gyu</p>
        <p className="Right">DEVELOPER</p>
      </div>
      <div className="ProfileContent">
        <div className="Content1">
          <img src={MyProfileImage} alt="" />
          <ProfileContentHeader headerName={"PROFILE"}></ProfileContentHeader>
          <div className="ProfileInfo">
            {profileInfoItems.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="Content2">
          <div className="Education">
            <ProfileContentHeader
              headerName={"EDUCATION"}
            ></ProfileContentHeader>
            <div className="EducationInfo">
              {educationInfoItems.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="Experience">
            <ProfileContentHeader
              headerName={"EXPERIENCE"}
            ></ProfileContentHeader>
            <div className="ExperienceInfo">
              {experienceInfoItems.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="License">
            <ProfileContentHeader headerName={"LICENSE"}></ProfileContentHeader>
            <div className="LicenseInfo">
              {licenseInfoItems.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="Content3">
          <div className="Skills">
            <ProfileContentHeader headerName={"SKILLS"}></ProfileContentHeader>
            <div className="SkillsInfo">
              {skillsInfoItems.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="AwardInterview">
            <ProfileContentHeader
              headerName={"AWARD&INTERVIEW"}
            ></ProfileContentHeader>
            <div className="AwardInterviewInfo">
              {awardInterviewInfoItems.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ProfileButton"></div>
    </div>
  );
}

export default Profile;
