import { useDispatch, useSelector } from "react-redux";
import { loadApplicationConfig } from "../redux/queue/slice";
import axios from "axios";

/**
 * @apiNote Configurações para acesso da API
 * @returns AxiosInstance
 */
const ISLabsService = () => {
    let baseURL = '';
    
    useDispatch(loadApplicationConfig());
    const{ applicationConfigData } = useSelector((rootReducer) => rootReducer.queue);

    baseURL = applicationConfigData.url + '/' + applicationConfigData.port + '/integracao';

    console.log(baseURL);

    return axios.create({ baseURL });

}

export default ISLabsService;


