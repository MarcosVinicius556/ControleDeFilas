/* eslint-disable react/display-name */
import { memo } from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Card } from './Error.style';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/Error.svg';

const Error = memo(() => {

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
          <h3>Ops... A página que você está tentando acessar não está disponível!</h3>
          <img src={img} alt="Error Image" />
        </Card>
      </Container>
    )
  }
)

export default Error