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
   yield alert('Chamou o SAGA da fila para senha normal');
   try{
        yield put(fetchNormalPassSuccess('Olá mundo, deu certo!'));
    } catch(error) {
        yield put(fetchNormalPassFailure('Olá mundo, deu errado!'));
    }
}

function* fetchPreferentialPass() {
    yield alert('Chamou o SAGA da fila para senha preferêncial');
    try{
        yield put(fetchPreferentialPassSuccess('Olá mundo, deu certo!'));
    } catch(error) {
        yield put(fetchPreferentialPassFailure('Olá mundo, deu errado!'));
    }
}

/**
 * Definindo quais caminhos nosso saga irá interceptar, e o que irá realizar....
 */
export default all([
    takeLatest('queue/fetchNormalPass', fetchNormalPass),
    takeLatest('queue/fetchPreferentialPass', fetchPreferentialPass)
]);
   