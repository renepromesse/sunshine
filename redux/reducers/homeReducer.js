import { HOME_MENU_CONTENT, PURCHASE_MENU_CONTENT } from '../actions/types';
import { cardContent, ticketCardContent } from '../../dummyData';

const initialState ={
    homeCardContent: cardContent,
    ticketCardContent: ticketCardContent
}

export const homeReducer = (state = initialState, action) =>{
    switch(action.type){
        case HOME_MENU_CONTENT:
            return{
                ...state,
                homeCardContent: action.payload
            }
        case PURCHASE_MENU_CONTENT:
            return{
                ...state,
                ticketCardContent: action.payload
            }
        default :
        return state;
    }
}