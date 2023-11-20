/* eslint-disable react-refresh/only-export-components */
/**
 * define, organiza e exporta todos os reducers para a aplicação
 */

//Permite que reducers sejam combinado e exportados....
import { combineReducers } from 'redux';
import queueSlice from './queue/slice';


/**
 * Exportando todos os reducers...
 */

export default combineReducers({
    queue: queueSlice,
});