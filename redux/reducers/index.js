import { combineReducers } from 'redux';
import {headerReducer} from './headerReducer';
import { homeReducer } from './homeReducer';
import { getNasaMonthlyDataReducer } from './getNasaDataReducer';

const rootReducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    nasaMonthData: getNasaMonthlyDataReducer,
});

export default rootReducer;