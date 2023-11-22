import { useEffect, useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import LoadingSpin from 'react-loading-spin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Logo from '../../assets/celio.png';
import ConfigButton from "../../components/ConfigButton";
import PrintComponent from '../../components/PrintComponent';
import { clearStates, fetchNormalPass, fetchPreferentialPass } from '../../redux/queue/slice';
import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import { ButtonNorml, ButtonPref, Card, PrintContainer } from "./QueueCaller.style";

const QueueCaller = () => {

  let printRef = useRef();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { queueToPrint, 
          applicationConfigData, 
          customer, 
          loadingNormal, 
          loadingPref } = useSelector((rootReducer) => rootReducer.queue);

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
    /**
     * Enviamos também a função de impressão para garantir que somente será impresso após atualizar os dados
     */
    dispatch(fetchNormalPass(queueObj));

  }

  const callPreferentialPass = () => {
    let queueObj = {
      ...customer,
      queueType: 2,
      queueId: applicationConfigData.queueId,
    }

    dispatch(fetchPreferentialPass(queueObj));
    
  }

  const handlePrint = useReactToPrint({
    content: () => printRef
  });

  useEffect(() => {
    if(queueToPrint.prefix === '' || queueToPrint.prefix === undefined)
      return;
    
    if(queueToPrint.pass === '' || queueToPrint.pass === undefined)
      return;
    
    if(queueToPrint.dataHora === '' || queueToPrint.dataHora === undefined)
      return;
    
    handlePrint();

    setTimeout(() => {
      navigate('/');
      dispatch(clearStates());
    }, 2000);
  }, [queueToPrint]);

  return (
    <>
      <PrintContainer>
        <PrintComponent 
          header={queueToPrint.header}
          prefix={queueToPrint.prefix}
          pass={queueToPrint.pass}
          dataHora={queueToPrint.dataHora}
          footer={queueToPrint.footer}
          ref={(element) => (printRef = element) }
        />
      </PrintContainer>
      <Container>
        <Card>
          <a onClick={handleBack}> 
            <BiArrowBack size={55}/>
          </a>
          <img src={Logo} alt="Logo da empresa" />
          <span>
            <ButtonNorml onClick={() => callNormalPass()}> 
                {loadingNormal ? (<LoadingSpin />) : ("Senha Normal")}
            </ButtonNorml> 
            <ButtonPref onClick={() => callPreferentialPass()}>
                {loadingPref ? (<LoadingSpin />) : ("Senha Preferêncial")}
            </ButtonPref>
          </span>
          <DeveloppedBy>Desenvolvido por Infoarte Software LTDA.</DeveloppedBy>
        </Card>
        <ConfigButton />
      </Container>
    </>
  )
}

QueueCaller.displayName = "QueueCaller";

export default QueueCaller