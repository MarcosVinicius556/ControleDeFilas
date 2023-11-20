/**
 * Aqui será definido e organizado os estados da aplicação e
 * também as funções disnpíveis para alterar
 * tais estados...
 */

import { createSlice } from '@reduxjs/toolkit';
import CryptoJS from "crypto-js";

const secretPass = 'teste';

/**
 * Valor inicial da aplicação...
 */
const initialAppState = {
    customer: {
        indetifierType: '',
        identifier: ''
    },
    applicationConfigData: null
}

export const queueSlice = createSlice({
    name: 'queue',
    initialState: initialAppState,
    reducers: {
        createApplicationConfig: (state, action) => {
            let data = {
                url: action.payload.url,
                port: action.payload.port,
            }

            let crypt = encryptData(data);
            localStorage.setItem('@infoarteData', crypt);
            state.applicationConfigData = data;
            
            return{
                ...state,
            }
        },
        loadApplicationConfig: (state) => {
            let encryptedData = localStorage.getItem('@infoarteData');
            let configData = decryptData(encryptedData);

            state = configData;
            return{
                ...state
            }
        },
        fetchNormalPassSuccess: (state, action) => {
            console.log(state);
            console.log(action);
        },
        fetchNormalPassFailure: (state, action) => {
            console.log(state);
            console.log(action);
        },
        fetchPreferentialPassSuccess: (state, action) => {
            console.log(state);
            console.log(action);
        },
        fetchPreferentialPassFailure: (state, action) => {
            console.log(state);
            console.log(action);
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
    createApplicationConfig,
    loadApplicationConfig,
    fetchNormalPassSuccess,
    fetchNormalPassFailure,
    fetchPreferentialPassSuccess,
    fetchPreferentialPassFailure } = queueSlice.actions;

/**
 * Por fim exportamos o reducer para utilizar na aplicação
 */
export default queueSlice.reducer;