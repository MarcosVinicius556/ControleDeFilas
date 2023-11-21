import { decryptData } from './CryptService';
import axios from "axios";

/**
 * @apiNote Configurações para acesso da API
 * @returns AxiosInstance
 */
let encryptedData = localStorage.getItem('@infoarteData');
let configData = encryptedData ? decryptData(encryptedData) : {url: '', port: ''};

const BASE_URL = configData?.url && configData?.port ?
                `${configData.url}:${configData.port}/integracao` : '';

const ISLabsService = axios.create({ baseURL: BASE_URL });

export default ISLabsService;


