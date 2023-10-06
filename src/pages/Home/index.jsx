import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import Logo from '../../assets/celio.png';
import { Card, ButtonNorml, ButtonPref } from "./Home.style";
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();

    navigate('/');
  }

  return (
    <Container>
      <Card>
        <a onClick={handleBack}> 
          <BiArrowBack size={55}/>
        </a>
        <img src={Logo} alt="Logo da empresa" />
        <span>
          <ButtonPref>Senha Normal</ButtonPref>
          <ButtonNorml>Senha Preferêncial</ButtonNorml>
        </span>
        <DeveloppedBy>Desenvolvido por Infoarte Software LTDA.</DeveloppedBy>
      </Card>
    </Container>
  )
}

export default Home