/**
 * Aqui será definido e organizado os estados da aplicação e
 * também as funções disnpíveis para alterar
 * tais estados...
 */

import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { decryptData, encryptData } from '../../service/CryptService';



/**
 * Valor inicial da aplicação...
 */
const initialAppState = {
    customer: {
        indetifierType: '',
        identifier: '',
        queueType: 0
    },
    applicationConfigData: null,
    availableQueue: [],
    queueToPrint: {
        header: '',
        prefix: '',
        pass: '',
        footer: ''
    },
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
            toast.error('Houve um erro ao buscar as filas dinsponíveis para uso. Erro: ' + action.payload);
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
            let queuePrint = action.payload;

            return {
                ...state,
                queueToPrint: queuePrint,
                loadingNormal: false
            }
        },
        fetchNormalPassFailure: (state, action) => {

            toast.error('Não foi possível realizar a comunicação com o servidor! Erro: ' + action.payload);
            
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
            let queuePrint = action.payload;

            return {
                ...state,
                loadingPref: false,
                queueToPrint: queuePrint
                
            }
        },
        fetchPreferentialPassFailure: (state, action) => {

            toast.error('Não foi possível realizar a comunicação com o servidor! Erro: ' + action.payload);
        
            return {
                ...state,
                loadingPref: false
            }
        },
        clearStates: (state) => {
            state = initialAppState;
            return {
                ...state
            }
        }
    }
});

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
    fetchPreferentialPassFailure,
    clearStates } = queueSlice.actions;

/**
 * Por fim exportamos o reducer para utilizar na aplicação
 */
export default queueSlice.reducer;