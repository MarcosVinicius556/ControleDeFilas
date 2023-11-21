import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { LuRefreshCw } from "react-icons/lu";
import LoadingSpin from 'react-loading-spin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/celio.png';
import { createApplicationConfig, fetchAvailableQueue, loadApplicationConfig } from '../../redux/queue/slice';
import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import { Form, FormCard } from './Config.style';
import { toast } from 'react-toastify';

export const Config =  () => {
    const [url, setUrl] = useState('');
    const [port, setPort] = useState('');
    const [queueId, setQueueId] = useState(0);

    const { loadingConfig, availableQueue, applicationConfigData } = useSelector((rootReducer) => rootReducer.queue);
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
        setUrl(applicationConfigData?.url);
        setPort(applicationConfigData?.port);
        setQueueId(applicationConfigData?.queueId);
        

    }, [applicationConfigData?.url, applicationConfigData?.port, applicationConfigData?.queueId, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(url !== '' && port !== ''){
            dispatch(createApplicationConfig({url: url, port: port, queueId: queueId }));
        } else {
            toast.warn('URL e PORTA devem ser configuradas!');
        }
    };

    const refreshQueue = (e) => {
        e.preventDefault();
        if(applicationConfigData?.url !== '' && applicationConfigData?.port !== ''){
            dispatch(fetchAvailableQueue());
            if(applicationConfigData?.queueId)
                setQueueId(applicationConfigData?.queueId);
        } else {
            toast.warn('Para buscar as filas, antes deve ser configurado URL e PORTA!');
        }
        
        
    }
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
                            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}/>
        
                            <label>PORTA</label>
                            <input type="text" value={port} onChange={(e) => setPort(e.target.value)}/>
                            <label>FILA A SER UTILIZADA</label>
                            <div>
                                <select value={queueId} onChange={(e) => setQueueId(e.target.value)}>
                                    {availableQueue !== null ? 
                                    availableQueue.map((queue) => (
                                        <option key={queue.id} value={queue.id}>{queue.description}</option>
                                    ))
                                    :
                                      (
                                        <option value={-1}>NADA ENCONTRADO</option>
                                      )  
                                    }
                                </select>
                                <button onClick={(e) => refreshQueue(e)}>
                                    <LuRefreshCw size={20}/>
                                </button>
                            </div>
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
};

Config.displayName = "Config";

export default Config


