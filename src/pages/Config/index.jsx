import { memo, useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/celio.png';
import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import { Form, FormCard
} from './Config.style';
// import { ConfigContext } from "../../context/ConfigContext";

// eslint-disable-next-line react/display-name
export const Config =  memo(() => {
    const [serverUrl, setServerUrl] = useState('');
    const [serverPort, setServerPort] = useState(''); 

    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
    
        navigate('/');
    }

    useEffect(() => {
        // const loadConfigData = () => {

        //     /**
        //      * Busca as configurações existentes no localStorage do usuário
        //      */
        //     setServerUrl(state.serverUrl);
        //     setServerPort(state.serverPort);

        // }

        // loadConfigData();

        // console.log(state);
    }, []);

    const handleSubmit = (e) => {
        console.log(e);
        // e.preventDefault();
        // let configData = {
        //     url: serverUrl,
        //     port: serverPort
        // }

        // dispatch({ type:'saveConfig', payload:configData })
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
export default Config


