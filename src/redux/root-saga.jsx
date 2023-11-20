/**
 * Define, organiza e disponibiliza todas as sagas da aplicação
 */

import { all } from 'redux-saga/effects';
import queue from './queue/queueSaga';

/**
 * Exportando as sagas disponíveis para a aplicação
 */
export default function* applicationSagas(){
    return yield all([
        //Sagas disponíveis
        queue
    ]);
}