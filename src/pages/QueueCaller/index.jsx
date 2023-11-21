import { BiArrowBack } from 'react-icons/bi';
import LoadingSpin from 'react-loading-spin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/celio.png';
import ConfigButton from "../../components/ConfigButton";
import { fetchNormalPass, fetchPreferentialPass } from '../../redux/queue/slice';
import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import { ButtonNorml, ButtonPref, Card } from "./QueueCaller.style";

const QueueCaller = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { applicationConfigData, customer, loadingNormal, loadingPref } = useSelector((rootReducer) => rootReducer.queue);

  const handleBack = (e) => {
    e.preventDefault();

    navigate('/');
  }

  const callNormalPass = () => {
    let queueObj = {
        ...customer,
        queueType: 1,
        queueId: applicationConfigData.queueId,
    }
    dispatch(fetchNormalPass(queueObj));
  }

  const callPreferentialPass = () => {
    let queueObj = {
      ...customer,
      queueType: 1,
      queueId: applicationConfigData.queueId,
    }
    dispatch(fetchPreferentialPass(queueObj));
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
}

QueueCaller.displayName = "QueueCaller";

export default QueueCaller