/* eslint-disable react-refresh/only-export-components */
import {
    all,
    call,
    put,
    takeLatest
    } from 'redux-saga/effects';

import { fetchNormalPassSuccess, fetchNormalPassFailure,
         fetchPreferentialPassSuccess, fetchPreferentialPassFailure
        } from './slice';   

import axios from 'axios';

/**
 * Quando uma requisição for feita, a store chamará por "de trás dos panos" esta função,
 * ao ser executada irá realizar a requisição, e em caso de sucesso ou falha, será chamado o reducer
 * para realizar o que esteja definido para a aplicação....
 */
function* fetchNormalPass(){

}

function* fetchPreferentialPass() {

}

/**
 * Definindo quais caminhos nosso saga irá interceptar, e o que irá realizar....
 */
export default all([
    takeLatest('queue/fetchNormalPass', fetchNormalPass),
    takeLatest('queue/fetchPreferentialPass', fetchPreferentialPass)
]);
   