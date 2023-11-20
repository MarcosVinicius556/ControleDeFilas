/* eslint-disable react-refresh/only-export-components */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';

import {
    fetchAvailableQueueSuccess,
    fetchNormalPassFailure,
    fetchNormalPassSuccess,
    fetchPreferentialPassFailure,
    fetchPreferentialPassSuccess
} from './slice';


/**
 * Quando uma requisição for feita, a store chamará por "de trás dos panos" esta função,
 * ao ser executada irá realizar a requisição, e em caso de sucesso ou falha, será chamado o reducer
 * para realizar o que esteja definido para a aplicação....
 */
function* fetchNormalPass(){
   try{
        yield put(fetchNormalPassSuccess('Olá mundo, deu certo!'));
    } catch(error) {
        yield put(fetchNormalPassFailure('Olá mundo, deu errado!'));
    }
}

function* fetchPreferentialPass() {
    try{
        yield put(fetchPreferentialPassSuccess('Olá mundo, deu certo!'));
    } catch(error) {
        yield put(fetchPreferentialPassFailure('Olá mundo, deu errado!'));
    }
}

function* fetchAvailableQueue() {
    try {
        /**
         * Substituir por requisição da API
         */
        let data = [
            {
                id: 1,
                description: 'Fila Matriz'
            },
            {
                id: 2,
                description: 'Fila Centro'
            },
            {
                id: 3,
                description: 'Fila Blumenau'
            }
        ];
        yield put(fetchAvailableQueueSuccess(data));
    } catch (error) {
        yield put(fetchAvailableQueueSuccess('Olá mundo, deu errado!'));
    }
}

/**
 * Definindo quais caminhos nosso saga irá interceptar, e o que irá realizar....
 */
export default all([
    takeLatest('queue/fetchNormalPass', fetchNormalPass),
    takeLatest('queue/fetchPreferentialPass', fetchPreferentialPass),
    takeLatest('queue/fetchAvailableQueue', fetchAvailableQueue),
]);
   