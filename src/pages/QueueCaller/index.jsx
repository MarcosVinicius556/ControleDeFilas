import { memo } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/celio.png';
import ConfigButton from "../../components/ConfigButton";
import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import { ButtonNorml, ButtonPref, Card } from "./QueueCaller.style";
import { useDispatch, useSelector } from 'react-redux';
import { fetchNormalPass, fetchPreferentialPass } from '../../redux/queue/slice';
import LoadingSpin from 'react-loading-spin';

const QueueCaller = memo(() => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loadingNormal, loadingPref } = useSelector((rootReducer) => rootReducer.queue);

  const handleBack = (e) => {
    e.preventDefault();

    navigate('/');
  }

  const callNormalPass = () => {
    dispatch(fetchNormalPass());
  }

  const callPreferentialPass = () => {
    dispatch(fetchPreferentialPass());
  }

  return (
    <Container>
      <Card>
        <a onClick={handleBack}> 
          <BiArrowBack size={55}/>
        </a>
        <img src={Logo} alt="Logo da empresa" />
        <span>
          <ButtonPref onClick={() => callNormalPass()}> 
              {loadingNormal ? (<LoadingSpin />) : ("Senha Normal")}
          </ButtonPref>
          <ButtonNorml onClick={() => callPreferentialPass()}>
              {loadingPref ? (<LoadingSpin />) : ("Senha Preferêncial")}
          </ButtonNorml>
        </span>
        <DeveloppedBy>Desenvolvido por Infoarte Software LTDA.</DeveloppedBy>
      </Card>
      <ConfigButton />
    </Container>
  )
})
QueueCaller.displayName = "QueueCaller";

export default QueueCaller