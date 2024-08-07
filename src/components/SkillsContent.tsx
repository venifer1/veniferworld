import React, { useLayoutEffect } from "react";
import SkillsImg1 from "../assets/images/S1.png";
import SkillsImg2 from "../assets/images/S2.png";
import SkillsImg3 from "../assets/images/S3.png";
import SkillsImg4 from "../assets/images/S4.png";
import SkillsImg5 from "../assets/images/S5.png";
import SkillsImg6 from "../assets/images/S6.png";
import SkillsImg7 from "../assets/images/S7.png";
import SkillsImg8 from "../assets/images/S8.png";
import SkillsImg9 from "../assets/images/S9.png";
import SkillsImg10 from "../assets/images/S10.png";
import SkillsImg11 from "../assets/images/S11.png";
import SkillsImg12 from "../assets/images/S12.png";
import SkillsImg13 from "../assets/images/S13.png";
import styled from "styled-components";

const Li = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;
const LiLeft = styled.div`
    width: 170px;
    height: 170px;
    background-color: #eeeeee;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 128px;
        height: 128px;
    }
    img:hover {
        transform: scale(1.1);
        transition: all 0.35s linear;
    }
`;
const LiRight = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
const LiRightTitle = styled.p`
    font-size: 30px;
    font-weight: 700;
`;
const LiRightContent = styled.p`
    font-size: 20px;
    font-weight: 500;
    ${props => props.id === "special" ? 'text-indent: -22px; margin-left: 22px;' : ''}
`;

interface ISkillsContentProps {
    ContentType: string;
}

function SkillsContent ( { ContentType }:ISkillsContentProps ) {

    const num:number = Number(ContentType);
    let ContentName:string = '';
    let ContentProject:number = 0;
    let ContentDetail:string = '';
    let ContentImg:any;

    const ImgPreload = (ImgNum:number) => {
        let img:any = new Image();
        switch (ImgNum) {
            case 1:
                img.src = SkillsImg1;
                break;
            case 2:
                img.src = SkillsImg2;
                break;
            case 3:
                img.src = SkillsImg3;
                break;
            case 4:
                img.src = SkillsImg4;
                break;
            case 5:
                img.src = SkillsImg5;
                break;
            case 6:
                img.src = SkillsImg6;
                break;
            case 7:
                img.src = SkillsImg7;
                break;
            case 8:
                img.src = SkillsImg8;
                break;
            case 9:
                img.src = SkillsImg9;
                break;
            case 10:
                img.src = SkillsImg10;
                break;
            case 11:
                img.src = SkillsImg11;
                break;
            case 12:
                img.src = SkillsImg12;
                break;
            case 13:
                img.src = SkillsImg13;
                break;
            default:
                break;
        }
    }

    useLayoutEffect(() => {
        for (let i:number = 1 ; i <= 13 ; i++)
        {
          ImgPreload(i);
        }
    }, []);

    switch (num) {
        case 1:
            ContentImg = SkillsImg1;
            ContentName = "C";
            ContentProject = 12;
            ContentDetail = "임베디드 MCU 펌웨어 개발 언어로 사용하였으며, C언어 자체적으로 능숙할 뿐만 아니라, 로우 레벨 언어이기에 개발 기본기가 탄탄합니다.";
            break;
        case 2:
            ContentImg = SkillsImg2;
            ContentName = "C# (WPF)";
            ContentProject = 4;
            ContentDetail = "자판기의 펌웨어 솔루션 프로그램 개발 언어로 사용하였으며, 전부 MVVM 패턴을 사용해 개발하였습니다.";
            break;
        case 3:
            ContentImg = SkillsImg3;
            ContentName = "AVR (Atmega)";
            ContentProject = 12;
            ContentDetail = "조선기자재부터 자판기 등에 사용했습니다. 릴레이, 각종 모터, PWM, 적외선, 자력, 통신, 스위치, ADC, DAC, EEPROM 등 전반적인 제어 목적으로 개발하였습니다.";
            break;
        case 4:
            ContentImg = SkillsImg4;
            ContentName = "ARM (Stm32)";
            ContentProject = 7;
            ContentDetail = "조선기자재부터 자판기 등에 사용했습니다. AVR과 같이 제어목적으로 사용한 프로젝트도 있으나, 주로 통신을 기반한 메인보드 형태로 개발하였습니다.";
            break;
        case 5:
            ContentImg = SkillsImg5;
            ContentName = "HTML";
            ContentProject = 2;
            ContentDetail = "회사 홈페이지 개발과 시판용 자판기의 상태정보 모니터링 웹사이트 개발에 사용하였습니다.";
            break;
        case 6:
            ContentImg = SkillsImg6;
            ContentName = "CSS";
            ContentProject = 2;
            ContentDetail = "회사 홈페이지 개발과 시판용 자판기의 상태정보 모니터링 웹사이트 개발에 사용하였습니다.";
            break;
        case 7:
            ContentImg = SkillsImg7;
            ContentName = "JavaScript";
            ContentProject = 2;
            ContentDetail = "회사 홈페이지 개발과 시판용 자판기의 상태정보 모니터링 웹사이트 개발에 사용하였습니다.";
            break;
        case 8:
            ContentImg = SkillsImg8;
            ContentName = "React";
            ContentProject = 0;
            ContentDetail = "오프라인 부트캠프는 시간적 효율이 떨어진다고 판단하여 온라인 부트캠프 과정을 수료하였습니다. 해당 'VENIFER WORLD'는 React 기반으로 만들어졌습니다.";
            break;
        case 9:
            ContentImg = SkillsImg9;
            ContentName = "PHP (CodeIgniter)";
            ContentProject = 2;
            ContentDetail = "회사 홈페이지 개발과 시판용 자판기의 상태정보 모니터링 웹사이트 개발에 사용하였습니다.";
            break;
        case 10:
            ContentImg = SkillsImg10;
            ContentName = "HMI (Nextion)";
            ContentProject = 4;
            ContentDetail = "HMI는 주로 산업 장비 디스플레이 목적으로 사용하며, 조선기자재 Tank Level Gauge System과 자판기의 디스플레이에 사용하였습니다.";
            break;
        case 11:
            ContentImg = SkillsImg11;
            ContentName = "AWS (EC2)";
            ContentProject = 1;
            ContentDetail = "시판용 자판기의 상태정보 모니터링 웹사이트 개발에 사용하였고, EC2 내에 자판기 상태정보 로그를 DB에 저장하는 Socket Server를 개발하였습니다.";
            break;
        case 12:
            ContentImg = SkillsImg12;
            ContentName = "Github";
            ContentDetail = "회사 내 전 프로젝트들의 소스코드를 효율적으로 관리하기 위해 Github을 사용하였습니다.";
            break;
        case 13:
            ContentImg = SkillsImg13;
            ContentName = "MySQL";
            ContentProject = 3;
            ContentDetail = "자판기의 판매정보와 매출집계, 상태정보에 사용하였습니다. 기본적인 쿼리문, 권한관리, DB설계가 가능합니다.";
            break;
        default:
            break;
    }

    switch (num) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
            return (
                <Li>
                    <LiLeft>
                        <img src={ContentImg} alt=""/>
                    </LiLeft>
                    <LiRight>
                        <LiRightTitle>{ContentName}</LiRightTitle>
                        <LiRightContent>1. 구현 프로젝트 : {ContentProject}개</LiRightContent>
                        <LiRightContent id="special">2. {ContentDetail}</LiRightContent>
                    </LiRight>
                </Li>
            );
        case 12:
            return (
                <Li>
                    <LiLeft>
                        <img src={ContentImg} alt=""/>
                    </LiLeft>
                    <LiRight>
                        <LiRightTitle>{ContentName}</LiRightTitle>
                        <LiRightContent>1. {ContentDetail}</LiRightContent>
                    </LiRight>
                </Li>
            );
        default:
    }

    
}

export default SkillsContent;