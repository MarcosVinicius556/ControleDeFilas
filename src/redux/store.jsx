/**
 * Componente responsável por configurar e listar os
 * reducers disponíveis para a aplicação
 */

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import applicationSagas from './root-saga';

/**
 * Será nosso principal middleware, que irá interceptar,
 *  prepara e realizar requisições na aplicação
 */
const sagaMiddleware = createSagaMiddleware();

export const applicationStore = configureStore({
    //Aqui estamos definindo o nosso "grupo" de reducers para a aplicação
    reducer: rootReducer,
    //Definindo middlewares para a aplicação
    middleware: [sagaMiddleware]
});

/**
 * Inicializando o middleware da aplicação 
 * Aqui ele iniciara também a "escuta" dos reducers contidos 
 * dentro do "rootSaga"
 */
sagaMiddleware.run(applicationSagas);