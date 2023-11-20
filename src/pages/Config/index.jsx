import { memo, useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/celio.png';
import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import { Form, FormCard } from './Config.style';
import { useDispatch, useSelector } from 'react-redux';
import { createApplicationConfig, loadApplicationConfig } from '../../redux/queue/slice';

export const Config =  memo(() => {
    const [serverUrl, setServerUrl] = useState('');
    const [serverPort, setServerPort] = useState(''); 

    const { applicationConfigData } = useSelector((rootReducer) => rootReducer.queue);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
    
        navigate('/');
    }

    useEffect(() => {
        dispatch(loadApplicationConfig());
        /**
         * Busca as configurações existentes no localStorage do usuário
         */
        setServerUrl(applicationConfigData.url);
        setServerPort(applicationConfigData.port);

    }, [applicationConfigData.port, applicationConfigData.url, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createApplicationConfig({url: serverUrl, port: serverPort }))
    };
    return (
        <Container>
            <FormCard>
            <a onClick={handleBack}> 
                <BiArrowBack size={55}/>
            </a>
            <img src={Logo} alt="Logo da empresa" />
            <Form onSubmit={handleSubmit}>
                <span>
                    <label>URL</label>
                    <input type="text" value={serverUrl} onChange={(e) => setServerUrl(e.target.value)}/>

                    <label>PORTA</label>
                    <input type="text" value={ serverPort } onChange={(e) => setServerPort(e.target.value)}/>
                </span>

                <input type="submit" value="Salvar"/>

            </Form>
            <DeveloppedBy>Desenvolvido por Infoarte Software LTDA.</DeveloppedBy>
            </FormCard>
        </Container>
    )
});

Config.displayName = "Config";

export default Config


