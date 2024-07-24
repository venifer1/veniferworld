import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #onlyContact:hover {
    border: solid 5px #ffffff;
    p {
      color: #ffffff;
    }
  }
`;
const Button = styled.button`
  width: 155px;
  height: 62px;
  font-family: 'Noto sans KR', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: solid 0px;
  cursor: pointer;
  letter-spacing: 2px;
  margin: 20px 20px 60px 20px;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    border: solid 5px #141840;
    p {
      color: #141840;
    }
    transition: all 0.4s ease-in-out;
  }
  background-color: ${props => props.className === "jump" ? '#141840;' : '#303030;'}
`;
const ButtonP = styled.p`
  ${props => props.className === 'Top' ? 'font-size: 20px; color: #ffffff;' : 'font-size: 13px; color: #aaaaaa;'}
  font-weight: 600;
`;

interface IContentButtonProps {
  buttonType: string;
  updateSetFadeout: any;
}

function MobileContentButton({ buttonType, updateSetFadeout }:IContentButtonProps) {

  const navigate = useNavigate();

  const goButtonType1 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/About');
    }, 1000);
  }
  const goButtonType2 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/Skills');
    }, 1000);
  }
  const goButtonType3 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/Projects/1');
    }, 1000);
  }
  const goButtonType4 = () => {
    updateSetFadeout(false);
    navigate('/Projects/2');
  }
  const goButtonType5 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/Contact');
    }, 1000);
  }
  const goButtonType6 = () => {
    updateSetFadeout(false);
    navigate('/');
  }

  switch (buttonType) {
    case "1":
      return (
        <Button onClick={goButtonType1} className='jump'>
          <ButtonP className='Top'>소개</ButtonP>
          <ButtonP>GO ABOUT ME</ButtonP>
        </Button>
      );
    case "2":
      return (
        <Button onClick={goButtonType2} className='jump'>
          <ButtonP className='Top'>기술</ButtonP>
          <ButtonP>GO SKILLS</ButtonP>
        </Button>
      );
    case "3":
      return (
        <Button onClick={goButtonType3} className='jump'>
          <ButtonP className='Top'>프로젝트</ButtonP>
          <ButtonP>GO PROJECTS</ButtonP>
        </Button>
      );
    case "4":
      return (
        <Button onClick={goButtonType4} className='jump'>
          <ButtonP className='Top'>주요 프로젝트 2</ButtonP>
          <ButtonP>GO PROJECTS 2</ButtonP>
        </Button>
      );
    case "5":
      return (
        <Button onClick={goButtonType5} className='jump'>
          <ButtonP className='Top'>연락처</ButtonP>
          <ButtonP>GO CONTACT</ButtonP>
        </Button>
      );
    case "6":
      return (
        <>
          <GlobalStyle />
          <Button onClick={goButtonType6} id="onlyContact" className='jump'>
            <ButtonP className='Top'>메인으로</ButtonP>
            <ButtonP>GO MAIN</ButtonP>
          </Button>
        </>
      );
    default:
  }
}

export default MobileContentButton;
