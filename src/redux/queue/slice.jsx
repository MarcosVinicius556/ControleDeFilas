/**
 * Aqui será definido e organizado os estados da aplicação e
 * também as funções disnpíveis para alterar
 * tais estados...
 */

import { createSlice } from '@reduxjs/toolkit';
import CryptoJS from "crypto-js";
import { toast } from 'react-toastify';

const secretPass = 'teste';

/**
 * Valor inicial da aplicação...
 */
const initialAppState = {
    customer: {
        indetifierType: '',
        identifier: ''
    },
    applicationConfigData: null,
    availableQueue: [],
    loadingNormal: false,
    loadingPref: false,
    loadingConfig: false
}

export const queueSlice = createSlice({
    name: 'queue',
    initialState: initialAppState,
    reducers: {
        /**
         * @apiNote Monta o objeto do cliente para enviar para o servidor e criar um registro na filaAtendimento
         * @param {*} state 
         * @param {*} action 
         * @returns 
         */
        createCustomerData: (state, action) => {
            let customerData = {
                identifierType: action.payload.identifierType,
                identifier: action.payload.identifier
            }
            
            return {
                ...state,
                customer: customerData
            }
        },
        /**
         * @apiNote Salva a configuração em formato JSON e criptografada no localStorage da aplicação
         * @param {*} state 
         * @param {*} action 
         * @returns 
         */
        createApplicationConfig: (state, action) => {
            let data = {
                url: action.payload.url,
                port: action.payload.port,
                queueId: action.payload.queueId
            }

            let crypt = encryptData(data);
            localStorage.setItem('@infoarteData', crypt);
            toast.success('Configurações salvas com sucesso!');
            return{
                ...state,
                applicationConfigData: data
            }
        },
        /**
         * @apiNote Busca na memória se tem alguma configuração salva....
         * @param {*} state 
         * @returns 
         */
        loadApplicationConfig: (state) => {
            let encryptedData = localStorage.getItem('@infoarteData');
            let configData = encryptedData ? decryptData(encryptedData) : {url: '', port: ''};
            
            return{
                ...state,
                applicationConfigData: configData
            }
        },
        /**
         * @apiNote Efetua uma requisição para a API para verificar as Filas 
         *          que estão disponíveis para serem utilizadas nesta aplicação
         * @param {*} state 
         * @returns 
         */
        fetchAvailableQueue: (state) => {
            return {
                ...state,
                loadingConfig: true
            }
        },
        fetchAvailableQueueSuccess: (state, action) => {
            return {
                ...state,
                loadingConfig: false,
                availableQueue: action.payload
            }
        },
        fetchAvailableQueueFailure: (state, action) => {
            toast.failure('Houve um erro ao buscar as filas dinsponíveis para uso. Erro: ' + action.payload);
            return{
                ...state,
                loadingConfig: false
            }
        },
        /**
         * @apiNote Envia os dados do cliente atual, para gerar um atendimento 
         *          pendente no banco, e também retornar o número para impressão
         * @param {*} state 
         * @param {*} action 
         * @returns 
         */
        fetchNormalPass: (state) => {
            return {
                ...state,
                loadingNormal: true
            }
            
        },
        fetchNormalPassSuccess: (state, action) => {

            toast.success('Realizando impressão da senha!');
            alert('Recebeu os dados para impressão da fila normal...');
            console.log(action.payload);
            return {
                ...state,
                loadingNormal: false
            }
        },
        fetchNormalPassFailure: (state, action) => {

            toast.failure('Não foi possível realizar a comunicação com o servidor! Erro: ' + action.payload);
            
            return {
                ...state,
                loadingNormal: false
            }
        },
        /**
         * @apiNote Envia os dados do cliente atual (PREFERENCIAL), para gerar um atendimento 
         *          pendente no banco, e também retornar o número para impressão
         * @param {*} state 
         * @param {*} action 
         * @returns 
         */
        fetchPreferentialPass: (state) => {
            return {
                ...state,
                loadingPref: true
            }
        },
        fetchPreferentialPassSuccess: (state, action) => {
            
            toast.success('Realizando impressão da senha preferêncial!');
            alert('Recebeu os dados para impressão da fila preferencial...');
            console.log(action.payload);

            return {
                ...state,
                loadingPref: false
            }
        },
        fetchPreferentialPassFailure: (state, action) => {

            toast.failure('Não foi possível realizar a comunicação com o servidor! Erro: ' + action.payload);
        
            return {
                ...state,
                loadingPref: false
            }
        }
    }
});

/**
 * @apiNote Encrypt data for store in localStorage
 * @param {*} data 
 * @returns 
 */
const encryptData = (data) => {
    return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        secretPass
    ).toString();
}

/**
 * @apiNote Decrypt and return the value in localStorage of user
 * @param {*} data 
 * @returns 
 */
const decryptData = (data) => {
    return JSON.parse(CryptoJS.AES.decrypt(data, secretPass).toString(CryptoJS.enc.Utf8));
}

/**
 * Exportando todas as actions que poderão ser acessadas na aplicação
 */

export const {
    createCustomerData,
    createApplicationConfig,
    loadApplicationConfig,
    fetchAvailableQueue,
    fetchAvailableQueueSuccess,
    fetchAvailableQueueFailure,
    fetchNormalPass,
    fetchNormalPassSuccess,
    fetchNormalPassFailure,
    fetchPreferentialPass,
    fetchPreferentialPassSuccess,
    fetchPreferentialPassFailure } = queueSlice.actions;

/**
 * Por fim exportamos o reducer para utilizar na aplicação
 */
export default queueSlice.reducer;