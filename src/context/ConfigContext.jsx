import { createContext, useReducer} from "react";
import CryptoJS from "crypto-js";

const secretPass = 'teste';

const initialConfigData = {
    serverUrl: '',
    serverPort: '',
}

const configReducer = (state, action) => {
    switch(action.type) {
        case 'saveConfig':
            let data = {
                url: action.payload.url,
                port: action.payload.port,
            }
            let crypt = encryptData(data);
            localStorage.setItem('@infoarteData', crypt);
            state = data;
            return{
                ...state,
            }

        case 'loadConfig':
            let encryptedData = localStorage.getItem('@infoarteData');
            let configData = decryptData(encryptedData);

            state = configData;
            return{
                ...state
            }
    }
}

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


export const ConfigContext = createContext();

export const ConfigProvider = ({children}) => {

    const value = useReducer(configReducer, initialConfigData);

    return (

        <ConfigContext.Provider value={{ value }}>
            {children}
        </ConfigContext.Provider>

    )

}


