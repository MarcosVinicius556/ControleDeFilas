import { useDispatch, useSelector } from "react-redux";
import { loadApplicationConfig } from "../redux/queue/slice";
import axios from "axios";

/**
 * @apiNote Configurações para acesso da API
 * @returns AxiosInstance
 */
const ISLabsService = () => {
    let baseUrl = '';
    
    useDispatch(loadApplicationConfig());
    const{ applicationConfigData } = useSelector((rootReducer) => rootReducer.queue);

    baseUrl = applicationConfigData.url + '/' + applicationConfigData.port + '/';

    console.log(baseUrl);

    return axios.create({ baseUrl });

}

export default ISLabsService;


