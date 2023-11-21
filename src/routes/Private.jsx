/**
 * Compenente que irá validar se tem ou não configuração salva para utilizar a aplicação
 */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { loadApplicationConfig } from "../redux/queue/slice";

export default function Private({ children }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const{ applicationConfigData } = useSelector((rootReducer) => rootReducer.queue);

    useEffect(() => {
        dispatch(loadApplicationConfig());
     
        if(applicationConfigData === null) {
            toast.warn('Para utilizar a aplicação é necessário realizar a configuração!');
            navigate('/');
        }
    
        if(!applicationConfigData?.url) {
            toast.warn('Para utilizar a aplicação é necessário configurar uma URL de acesso válida!');
            navigate('/');
        }
    
        if(!applicationConfigData?.port) {
            toast.warn('Para utilizar a aplicação é necessário configurar uma PORTA de acesso válida!');
            navigate('/');
        }
    
        if(!applicationConfigData?.queueId) {
            toast.warn('Para utilizar a aplicação é necessário configurar uma FILA válida!');
            navigate('/');
        }
        

    }, [applicationConfigData?.url, applicationConfigData?.port, applicationConfigData?.queueId]);
    

    return children;
}