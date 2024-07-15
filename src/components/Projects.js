import React, { useLayoutEffect, useState } from "react";
import "../styles/Projects.css";
import { useParams } from "react-router-dom";
import ContentButton from "./ContentButton";
import NotFound from "./NotFound";
import ImgP1_1 from "../assets/images/P1_1.png";
import ImgP1_2 from "../assets/images/P1_2.png";
import ImgP1_3 from "../assets/images/P1_3.png";
import ImgP1_4 from "../assets/images/P1_4.png";
import ImgP1_5 from "../assets/images/P1_5.png";
import ImgP1_6 from "../assets/images/P1_6.png";
import ImgP1_7 from "../assets/images/P1_7.png";
import ImgP1_8 from "../assets/images/P1_8.png";
import ImgP1_9 from "../assets/images/P1_9.png";
import ImgP2_1 from "../assets/images/P2_1.png";
import ImgP2_2 from "../assets/images/P2_2.png";
import ImgP2_3 from "../assets/images/P2_3.png";
import ImgP2_4 from "../assets/images/P2_4.png";
import ImgP2_5 from "../assets/images/P2_5.png";
import ImgP2_6 from "../assets/images/P2_6.png";
import ImgP2_7 from "../assets/images/P2_7.png";
import ImgP2_8 from "../assets/images/P2_8.png";
import ImgP2_9 from "../assets/images/P2_9.png";
import ImgP2_10 from "../assets/images/P2_10.png";
import ImgP2_11 from "../assets/images/P2_11.png";
import ImgP2_12 from "../assets/images/P2_12.png";

function Projects() {
  const [fadeOut, setFadeOut] = useState(false);
  const { num } = useParams();
  const numId = Number(num);
  
  
  const ImgPreload = (ImgNum) => {
    let img = new Image();
    switch (ImgNum) {
      case 1:
        img.src = ImgP1_1;
        break;
      case 2:
        img.src = ImgP1_2;
        break;
      case 3:
        img.src = ImgP1_3;
        break;
      case 4:
        img.src = ImgP1_4;
        break;
      case 5:
        img.src = ImgP1_5;
        break;
      case 6:
        img.src = ImgP1_6;
        break;
      case 7:
        img.src = ImgP1_7;
        break;
      case 8:
        img.src = ImgP1_8;
        break;
      case 9:
        img.src = ImgP1_9;
        break;
      case 10:
        img.src = ImgP2_1;
        break;
      case 11:
        img.src = ImgP2_2;
        break;
      case 12:
        img.src = ImgP2_3;
        break;
      case 13:
        img.src = ImgP2_4;
        break;
      case 14:
        img.src = ImgP2_5;
        break;
      case 15:
        img.src = ImgP2_6;
        break;
      case 16:
        img.src = ImgP2_7;
        break;
      case 17:
        img.src = ImgP2_8;
        break;
      case 18:
        img.src = ImgP2_9;
        break;
      case 19:
        img.src = ImgP2_10;
        break;
      case 20:
        img.src = ImgP2_11;
        break;
      case 21:
        img.src = ImgP2_12;
        break;  
      default:
        break;
    }
  }

  useLayoutEffect(() => {
    for (let i = 1 ; i <= 21 ; i++)
    {
      ImgPreload(i);
    }
  }, []);

  switch (numId) {
    case 1:
      return (
        <div id={fadeOut ? "fadeAni" : ""} className="ProjectsView">
          <p className="ProjectsHeader">주요 프로젝트 1 - 열차용 멀티자판기</p>
          <div className="ProjectsContent1">
            <div className="Left">
              <table>
                <tr>
                  <th>프로젝트명</th>
                  <td>열차용 멀티자판기</td>
                </tr>
                <tr>
                  <th>발주처</th>
                  <td>(주)다원시스</td>
                </tr>
                <tr>
                  <th>프로젝트 기간</th>
                  <td>2020-06 ~ 2021-04</td>
                </tr>
                <tr>
                  <th>프로젝트 인원</th>
                  <td>5명</td>
                </tr>
                <tr>
                  <th>개요</th>
                  <td>
                    ITX-마음 전동열차(EMU-150)에 설치되는 멀티자판기를 개발.
                    자판기 전면에 27인치 터치스크린을 통해서 상품을 선택하여
                    결제가 완료되면 상품을 투출해주는 방식.
                  </td>
                </tr>
                <tr>
                  <th>담당 역할</th>
                  <td>
                    자판기 PCB 하드웨어 검증<br/>
                    자판기 통신 메인보드 펌웨어 개발 (Stm32f429)<br/>
                    자판기 기구물 제어 보드 2종 펌웨어 개발 (Atmega128-RTOS)<br/>
                    자판기 솔루션 프로그램 유지보수 (C#-WPF)<br/>
                    자판기 상품 설정용 프로그램 유지보수 (C#-WPF)<br/>
                    자판기 설정용 HMI 개발 (Nextion)<br/>
                    자판기 제어 테스트<br/>
                    자판기 철도규격인증시험 대응 (진동, 온습도, 전자파시험)
                  </td>
                </tr>
              </table>
            </div>
            <div className="Right">
              <ul>
                <li><img className="img_p1" src={ImgP1_1} alt=""/></li>
                <li><img className="img_p2" src={ImgP1_2} alt=""/></li>
                <li><img className="img_p3" src={ImgP1_3} alt=""/></li>
              </ul>
            </div>
          </div>
          <div className="ProjectsButton">
            <ContentButton buttonType={"next"}></ContentButton>
          </div>
        </div>
      );
    case 2:
      return (
        <div id={fadeOut ? "fadeAni" : ""} className="ProjectsView">
          <p className="ProjectsHeader">주요 프로젝트 1 - 열차용 멀티자판기</p>
          <div className="ProjectsContent2">
            <div className="Left">
              <table>
                <tr>
                  <th>제품규격(mm)</th>
                  <td>1785(H) x 740(W) x 700(D)</td>
                </tr>
                <tr>
                  <th>제품무게(kg)</th>
                  <td>252kg 이하</td>
                </tr>
                <tr>
                  <th>전원</th>
                  <td>
                    AC 220 ± 10% / 60Hz<br/>
                    DC 100V
                  </td>
                </tr>
                <tr>
                  <th>정격소비전력</th>
                  <td>520W 이하</td>
                </tr>
                <tr>
                  <th>조명등</th>
                  <td>DC12V / 50cm / LED 6W x 2EA / 색상 6000K</td>
                </tr>
                <tr>
                  <th>냉장온도</th>
                  <td>3℃ ~ 20℃ 변경 설정 가능</td>
                </tr>
                <tr>
                  <th>결제 수단</th>
                  <td>
                    신용카드, 선불카드, 레일플러스, 티머니, 캐시비, 코레일 마일리지,
                    삼성페이, QR코드 (현금제외)
                  </td>
                </tr>
                <tr>
                  <th>디스플레이</th>
                  <td>
                    27인치 정전식 터치스크린<br/>
                    해상도 : 1920 x 1080
                  </td>
                </tr>
                <tr>
                  <th>판매방식</th>
                  <td>스파이럴 & 벨트 방식</td>
                </tr>
                <tr>
                  <th>판매가능상품</th>
                  <td>스낵류 / CAN / PET 음료 / 잡화류 등</td>
                </tr>
                <tr>
                  <th>스파이럴(1단)</th>
                  <td>
                    6칼럼 / 1단<br/>
                    스파이럴 외경 Ø64 (변경 가능)<br/>
                    스파이럴 피치 : 40, 50, 60 (변경 가능)
                  </td>
                </tr>
                <tr>
                  <th>벨트(4단)</th>
                  <td>24칼럼 (6칼럼/1단)</td>
                </tr>
              </table>
            </div>
            <div className="Right">
              <ul>
                <li><img src={ImgP1_4} alt=""/></li>
                <li><img src={ImgP1_5} alt=""/></li>
                <li><img src={ImgP1_6} alt=""/></li>
                <li><img src={ImgP1_7} alt=""/></li>
                <li><img src={ImgP1_8} alt=""/></li>
                <li><img src={ImgP1_9} alt=""/></li>
              </ul>
            </div>
          </div>
          <div className="ProjectsButton">
            <ContentButton buttonType={"prev"}></ContentButton>
            <ContentButton buttonType={"4"}></ContentButton>
          </div>
        </div>
      );
    case 3:
      return (
        <div id={fadeOut ? "fadeAni" : ""} className="ProjectsView">
          <p className="ProjectsHeader">주요 프로젝트 2 - 시판용 멀티자판기</p>
          <div className="ProjectsContent3">
            <div className="Left">
              <table>
                <tr>
                  <th>프로젝트명</th>
                  <td>시판용 멀티자판기</td>
                </tr>
                <tr>
                  <th>발주처</th>
                  <td>자체 개발</td>
                </tr>
                <tr>
                  <th>프로젝트 기간</th>
                  <td>2021-03 ~ 2022-12</td>
                </tr>
                <tr>
                  <th>프로젝트 인원</th>
                  <td>4명</td>
                </tr>
                <tr>
                  <th>개요</th>
                  <td>
                    실내공간에 설치되는 멀티자판기를 개발. 터치스크린을 통해서 상품을 선택하
                    여 결제가 완료되면 상품을 투출해주는 방식. 자판기는 서버와 통신하여 웹
                    페이지로 매출, 품절, 고장 정보를 확인할 수 있고 알림을 통해 문자 혹은
                    카카오톡으로 정보를 관리자에게 전송.
                  </td>
                </tr>
                <tr>
                  <th>담당 역할</th>
                  <td>
                    자판기 PCB 하드웨어 검증<br/>
                    자판기 메인보드 펌웨어 개발 (Stm32f429)<br/>
                    자판기 기구물 제어보드 개발 (Atmega128-RTOS)<br/>
                    자판기 솔루션 프로그램 개발 (C#-WPF)<br/>
                    자판기 상품 설정용 프로그램 개발 (C#-WPF)<br/>
                    모니터링 서버 구축 (AWS, Java)<br/>
                    모니터링 서버 웹 개발 (HTML, CSS, JavaScript, PHP-CodeIgniter)<br/>
                    자판기 제어 테스트
                  </td>
                </tr>
              </table>
            </div>
            <div className="Right">
              <img src={ImgP2_1} alt=""/>
            </div>
          </div>
          <div className="ProjectsButton">
            <ContentButton buttonType={"prev"}></ContentButton>
            <ContentButton buttonType={"next"}></ContentButton>
          </div>
        </div>
      );
    case 4:
      return (
        <div id={fadeOut ? "fadeAni" : ""} className="ProjectsView">
          <p className="ProjectsHeader">주요 프로젝트 2 - 시판용 멀티자판기</p>
          <div className="ProjectsContent4">
            <div className="Left">
              <table>
                <tr>
                  <th>제품규격(mm)</th>
                  <td>1830(H) x 1681(W) x 914(D)</td>
                </tr>
                <tr>
                  <th>전원</th>
                  <td>AC 220 ± 10% / 60Hz</td>
                </tr>
                <tr>
                  <th>정격소비전력</th>
                  <td>450W</td>
                </tr>
                <tr>
                  <th>조명등</th>
                  <td>DC12V / 50mm / LED 6W x 2EA / 색상 6000K</td>
                </tr>
                <tr>
                  <th>냉장온도</th>
                  <td>3℃ ~ 20℃ 변경 설정 가능</td>
                </tr>
                <tr>
                  <th>결제수단</th>
                  <td>
                    카드결제 : 신용카드, 체크카드, 삼성페이<br/>
                    페이결제 : BC페이북 (QR결제)
                  </td>
                </tr>
                <tr>
                  <th>디스플레이</th>
                  <td>
                    24인치 정전식 터치스크린<br/>
                    해상도 1080 x 1920
                  </td>
                </tr>
                <tr>
                  <th>판매방식</th>
                  <td>
                    카트리지 적용 6단 선반 기본<br/>
                    엘리베이터 투출 방식
                  </td>
                </tr>
                <tr>
                  <th>판매가능상품</th>
                  <td>병 / CAN / PET 음료 / 일용품 / 생활용품 / 과자 등</td>
                </tr>
                <tr>
                  <th>수납량</th>
                  <td>240ml 캔 최대 336개 / PET 음료 최대 288개</td>
                </tr>
              </table>
            </div>
            <div className="Right">
              <ul>
                <li><img src={ImgP2_2} alt=""/></li>
                <li><img src={ImgP2_3} alt=""/></li>
                <li><img src={ImgP2_4} alt=""/></li>
                <li><img src={ImgP2_5} alt=""/></li>
                <li><img src={ImgP2_6} alt=""/></li>
                <li><img src={ImgP2_7} alt=""/></li>
                <li><img src={ImgP2_8} alt=""/></li>
                <li><img src={ImgP2_9} alt=""/></li>
              </ul>
            </div>
          </div>
          <div className="ProjectsButton">
            <ContentButton buttonType={"prev"}></ContentButton>
            <ContentButton buttonType={"next"}></ContentButton>
          </div>
        </div>
      );
    case 5:
      return (
        <div id={fadeOut ? "fadeAni" : ""} className="ProjectsView">
          <p className="ProjectsHeader">주요 프로젝트 2 - 시판용 자판기</p>
          <div className="ProjectsContent5">
            <ul>
              <li><img className="img_p1" src={ImgP2_10} alt=""/></li>
              <li><img className="img_p2" src={ImgP2_11} alt=""/></li>
              <li><img className="img_p3" src={ImgP2_12} alt=""/></li>
            </ul>
          </div>
          <div className="ProjectsButton">
            <ContentButton buttonType={"prev"}></ContentButton>
            <ContentButton buttonType={"5"} updateSetFadeout={setFadeOut}></ContentButton> 
          </div>
        </div>
      );
    default:
      return (
        <NotFound></NotFound>
      );
      break;
  }
}

export default Projects;
