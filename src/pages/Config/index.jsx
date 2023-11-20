import { memo, useEffect, useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import LoadingSpin from 'react-loading-spin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/celio.png';
import { createApplicationConfig, fetchAvailableQueue, loadApplicationConfig } from '../../redux/queue/slice';
import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import { Form, FormCard } from './Config.style';

export const Config =  memo(() => {
    const urlRef = useRef('');
    const portRef = useRef('');
    const queueRef = useRef(0);

    const { loadingConfig, availableQueue, applicationConfigData } = useSelector((rootReducer) => rootReducer.queue);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
    
        navigate('/');
    }
    useEffect(() => {
        
        dispatch(fetchAvailableQueue());
     
        dispatch(loadApplicationConfig());
        /**
         * Busca as configurações existentes no localStorage do usuário
         */
        urlRef.current.value = applicationConfigData?.url;
        portRef.current.value = applicationConfigData?.port;
        queueRef.current.value = applicationConfigData?.queueId;
        

    }, [applicationConfigData?.url, applicationConfigData?.port, applicationConfigData?.queueId, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(queueRef.current?.value === 0 || queueRef.current?.value === '') {
            alert('Selecione ao menos uma fila para poder prosseguir!')
            return;
        }
        dispatch(createApplicationConfig({url: urlRef.current?.value, port: portRef.current?.value, queueId: queueRef.current?.value }));
        navigate('/');
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
                    {
                    loadingConfig 
                        ? (
                            <LoadingSpin />
                        )
                    : (
                        <>
                            <label>URL</label>
                            <input type="text" ref={urlRef}/>
        
                            <label>PORTA</label>
                            <input type="text" ref={portRef}/>
                            <label>FILA A SER UTILIZADA</label>
                            <select ref={queueRef}>
                                {
                                    availableQueue.map((queue) => (
                                        <option key={queue.id} value={queue.id}>{queue.description}</option>
                                    ))
                                }
                            </select>
                        </>
                    )
                }
                   
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


