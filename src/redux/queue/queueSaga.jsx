/* eslint-disable react-refresh/only-export-components */
import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';

import {
    fetchAvailableQueueSuccess,
    fetchAvailableQueueFailure,
    fetchNormalPassFailure,
    fetchNormalPassSuccess,
    fetchPreferentialPassFailure,
    fetchPreferentialPassSuccess
} from './slice';

import ISLabsService from '../../service/ISLabsService';


/**
 * Quando uma requisição for feita, a store chamará por "de trás dos panos" esta função,
 * ao ser executada irá realizar a requisição, e em caso de sucesso ou falha, será chamado o reducer
 * para realizar o que esteja definido para a aplicação....
 */
function* fetchNormalPass(action){
   try{
        let customer = action.payload;
        console.log(customer);
        const response = yield call(ISLabsService.post("/createatendimento", customer));

        console.log(response.data);

        yield put(fetchNormalPassSuccess(response.data))
    } catch(error) {
        yield put(fetchNormalPassFailure(error));
    }
}

function* fetchPreferentialPass(action) {
    try{
        let customer = action.payload;
        console.log(customer);
        const response = yield call(ISLabsService.post("/createatendimento", customer));

        console.log(response.data);

        yield put(fetchPreferentialPassSuccess(response.data))
    } catch(error) {
        yield put(fetchPreferentialPassFailure('Olá mundo, deu errado!'));
    }
}

function* fetchAvailableQueue() {
    try {
        const response = yield call(ISLabsService.get("/filas"));

        console.log(response.data);

        yield put(fetchAvailableQueueSuccess(response.data))
    } catch (error) {
        yield put(fetchAvailableQueueFailure(error));
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
   