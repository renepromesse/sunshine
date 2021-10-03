import { MONTHLY_NASA_DATA_FAILURE, MONTHLY_NASA_DATA_PENDING, MONTHLY_NASA_DATA_SUCCESS } from '../actions/types';

const initialState ={
    monthlyNasaDataPending: false,
    monthlyNasaDataError: null,
    monthlyNasaData: null    
}

export const getNasaMonthlyDataReducer = (state = initialState, action) =>{
    switch(action.type){
        case MONTHLY_NASA_DATA_PENDING:
            return {
                ...state,
                monthlyNasaDataPending: true,
            }
        case MONTHLY_NASA_DATA_SUCCESS:
            return {
                ...state,
                monthlyNasaDataPending: false,
                monthlyNasaData: action.payload,
            }
        case MONTHLY_NASA_DATA_FAILURE:
            return{
                ...state,
                monthlyNasaDataPending: false,
                monthlyNasaDataError: action.payload
            }
        default :
        return state;
    }
}