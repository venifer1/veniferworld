import "../styles/ContentButton.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface IContentButtonProps {
  buttonType: string;
  updateSetFadeout: any;
}

function ContentButton({ buttonType, updateSetFadeout }:IContentButtonProps) {

  const navigate = useNavigate();

  const params:any = useParams();
  const numId:number = Number(params.num);
  const location:any = useLocation();
  const currentPath:string = location.pathname;
  const currentPathBuf:string = currentPath.substring(0, currentPath.lastIndexOf('/'));

  const goButtonTypePrev = () => {
    updateSetFadeout(false);
    switch(numId) {
      case 2:
      case 3:
      case 4:
      case 5:
        navigate(currentPathBuf + '/' + Number(numId-1));
        break;
      default:
        break;
    }
  }
  const goButtonTypeNext = () => {
    updateSetFadeout(false);
    switch(numId) {
      case 1:
      case 2:
      case 3:
      case 4:
        navigate(currentPathBuf + '/' + Number(numId+1));
        break;
      default:
        break;
    }
  }
  const goButtonType1 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/About/1');
    }, 1000);
  }
  const goButtonType2 = () => {
    updateSetFadeout(true);
    setTimeout(() => {
      navigate('/Skills/1');
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
    navigate('/Projects/3');
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
    case "prev":
      return (
        <button onClick={goButtonTypePrev} className="contentBtn prev">
          <p className="Top">이전</p>
          <p className="Bottom">PREV</p>
        </button>
      );
    case "next":
      return (
        <button onClick={goButtonTypeNext} className='contentBtn next'>
          <p className='Top'>다음</p>
          <p className='Bottom'>NEXT</p>
        </button>
      );
    case "1":
      return (
        <button onClick={goButtonType1} className='contentBtn jump'>
          <p className='Top'>소개</p>
          <p className='Bottom'>GO ABOUT ME</p>
        </button>
      );
    case "2":
      return (
        <button onClick={goButtonType2} className='contentBtn jump'>
          <p className='Top'>기술</p>
          <p className='Bottom'>GO SKILLS</p>
        </button>
      );
    case "3":
      return (
        <button onClick={goButtonType3} className='contentBtn jump'>
          <p className='Top'>프로젝트</p>
          <p className='Bottom'>GO PROJECTS</p>
        </button>
      );
    case "4":
      return (
        <button onClick={goButtonType4} className='contentBtn jump'>
          <p className='Top'>주요 프로젝트 2</p>
          <p className='Bottom'>GO PROJECTS 2</p>
        </button>
      );
    case "5":
      return (
        <button onClick={goButtonType5} className='contentBtn jump'>
          <p className='Top'>연락처</p>
          <p className='Bottom'>GO CONTACT</p>
        </button>
      );
    case "6":
      return (
        <button onClick={goButtonType6} id="onlyContact" className='contentBtn jump'>
          <p className='Top'>메인으로</p>
          <p className='Bottom'>GO MAIN</p>
        </button>
      );
    default:
  }
}

export default ContentButton;
